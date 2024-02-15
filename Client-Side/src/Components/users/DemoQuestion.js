import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { myheaders } from '../routes/auth';



const DemoQuestion = () => {
  const [subjects, setSubjects] = useState([]);
  const [subject, setSubject] = useState('');
  const [demoQuestions, setDemoQuestions] = useState([]);
  const [error, setError] = useState('');
  const token = myheaders()

  useEffect(() => {
    
    axios.get('http://127.0.0.1:9997/admin/getsubjectstypes')
      .then(response => {
        setSubjects(response.data.subjects);
      })
      .catch(error => {
        setError('Error fetching subjects');
      });
  }, []);
  const handleSearch = () => {
    
    axios.get(`http://127.0.0.1:9997/admin/demoquestions?subject=${subject}`, {headers:token})
      .then(response => {
        if (response.data.status === "success") {
          setDemoQuestions(response.data.result);
          setError('');
        } else {
          setError('Error fetching demo questions');
          setDemoQuestions([]);
        }
      })
      .catch(error => {
        setError('Error fetching demo questions');
        setDemoQuestions([]);
      });
  };

  return (
    <div>
      <select value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option value="">Select a subject</option>
        {subjects.map((subject, index) => (
          <option key={index} value={subject}>{subject}</option>
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
  );
};





export default DemoQuestion;
