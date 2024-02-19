import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { myheaders } from '../routes/auth';
import Navbar from './Navbar1';



const DemoQuestion = () => {
  const [subjects, setSubjects] = useState([]);
  const [subject, setSubject] = useState('');
  const [demoQuestions, setDemoQuestions] = useState([]);
  const [error, setError] = useState('');
  

  useEffect(() => {
    const token = myheaders()  
    axios.get(`http://127.0.0.1:9997/admin/getsubjectstypes`, {headers:token})
      .then(response => {
        if (response.data.status === "success"){
        setSubjects(response.data.result);
        setError('');
  }
  else {
    setError('Error fetching demo questions');
    setSubjects('');
  }
})
      .catch(error => {
        setError('Error fetching subjects');
      });
  }, []);

  const handleSubjectChange = (event) => {
    const selectedSubject = event.target.value;
    setSubject(selectedSubject);
    console.log(selectedSubject)
    setDemoQuestions([]); // Reset demoQuestions when a new subject is selected
    setError(''); // Clear any previous error messages
  };

  
  const handleSearch = () => {
    const token = myheaders()
    if (!subject) {
        setDemoQuestions("")
        setError('Please select a subject');
        return;
    }
    
    axios.get(`http://127.0.0.1:9997/admin/demoquestions?subject=${subject}`, { headers: token })
        .then(response => {
            if (response.data.status === "success") {
                setDemoQuestions(response.data.result);
                setError('');
            } else {
              setError('No demo questions found for the selected subject');
            }
        })
        .catch(error => {
            setError('Error fetching demo questions');
            setDemoQuestions([]);
        });
};

 // console.log('demoQuestions:', demoQuestions);
  return (
    <>
    <Navbar/>
    <div>
      
      <select value={subject} onChange={handleSubjectChange}>
        <option value="">Select a subject</option>
        {subjects && subjects.map(({Subjectid, Subjects, Title }) => (
          <option key={Subjectid} value={Subjects}>{Subjects}</option>
        ))}
      </select>
      <button onClick={handleSearch}>Search</button>
     
      {demoQuestions.length > 0 && (
        <div>
          <h2>Demo Questions:</h2>
          <ul>
            {demoQuestions.map((demoQuestion, index) => (
              <li key={index}>
                <p> {demoQuestion.Question}</p>
                <p> {demoQuestion.Answer}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  </>
  );
};





export default DemoQuestion;
