import Navbar from "./Navbar";
<<<<<<< HEAD
import "../css/Sceduleinterview.css"

function ScheduledInterview() {




  
    return (
        <>
        <Navbar/>
        <div className="card">
              <div style={{backgroundColor:"whitesmoke"}}>
                <div class="icard">
                  <p> Title:-<strong>My Title</strong></p>
                  <p>Date:-My Date</p>
                  <p >Status</p>
                </div> 
                <div class="icard">
                  <p> Title:-<strong>My Title</strong></p>
                  <p>Date:-My Date</p>
                  <p >Status</p>
                </div> 
                <div class="icard">
                  <p> Title:-<strong>My Title</strong></p>
                  <p>Date:-My Date</p>
                  <p >Status</p>
                </div> 
              </div>
          </div>
=======
import React,{useState,useEffect} from "react";
import axios from "axios";

function ScheduledInterview() {
  const [interviewers, setInterviewers] = useState([]);

  useEffect(() => {
      const headers = myheaders();

      axios.get("http://127.0.0.1:9997/interviewer/InterviewSceduled/:{id}", { headers })
          .then(res => setInterviewers(res.data.result))
          .catch(err => console.log(err));
  }, []);
  const renderInterviewers = () => {
    return interviewers.map((interviewer) => (
        <div className="card" style={{ "width": "18rem", "margin": "10px" }} key={interviewer.Interviewerid}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{interviewer.FirstName} {interviewer.LastName}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{interviewer.Email}</li>
                <li className="list-group-item">{interviewer.Address}</li>
                <li className="list-group-item">{interviewer.CompanyPosition}</li>
                <li className="list-group-item">{interviewer.QualifiedDegree}</li>
            </ul>
            <div className="card-body">
               <Link to="/login/user/scheduleInterview">Schedule Interview</Link> <br/><br/>
                <a href="#" className="card-link">Check Feedbacks</a>
            </div>
        </div>
    ));
};



    return (
        <>
        <Navbar/>
        
        <h3>GetInterviewers</h3>
                <button onClick={() => console.log(interviewers)}>My interviewers button</button>
                <div className="container">
                    {renderInterviewers()}
                </div>
>>>>>>> 8273192e (Updated)
        </>
      );
    }   

export default ScheduledInterview;