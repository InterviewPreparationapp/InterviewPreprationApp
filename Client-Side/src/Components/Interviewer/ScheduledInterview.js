import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../css/Sceduleinterview.css"


import React,{useState,useEffect} from "react";
import axios from "axios";
import { myheaders,getCurrentUserid, getCurrentInterviewerid } from "../routes/auth";

function ScheduledInterview() {
  const [interviewers, setInterviewers] = useState([]);
  const [scheduled,setScheduled] = useState([])

    useEffect(() => {
      
}, []);

const ApproveRequest = () =>{
  
}

const mybtn = ()=>{
  const headers = myheaders();
      const id = getCurrentUserid();
     // console.log(headers)
       axios.get(`http://127.0.0.1:9997/interviewer/InterviewSceduled/${id}`,{ headers })
       .then((res)=>{
       // console.log(res)
        //console.log(res.data.result)
        setInterviewers(res.data.result)
       })
       .catch(err => console.log(err));
       console.log(interviewers[0].Interviewid) 
}
          
const renderInterviewers = () => {
  return interviewers.map((interviewer) => (
      <div className="card" style={{ "width": "18rem", "margin": "10px" }} key={interviewer.Interviewid}>
          <img src="..." className="card-img-top" alt="..." />
          <ul className="list-group list-group-flush">
                    <li className="list-group-item">{interviewer.Date}</li>
                    <li className="list-group-item">{interviewer.Title}</li>
                    <li className="list-group-item">{interviewer.Userid}</li>
                </ul>
                <div className="card-body">
                   <button onClick={ApproveRequest} >Approve</button>
                </div>
      </div>
        ));
      };

    return (
        <>
        <Navbar/>
        <h3>GetInterviewers</h3>
                <button onClick={mybtn}>My interviewers button</button>
                <div className="container">
                    {renderInterviewers()}
                </div>
   
        </>
      );
    }   

export default ScheduledInterview;