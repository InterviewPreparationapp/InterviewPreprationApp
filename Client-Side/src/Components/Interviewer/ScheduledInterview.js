import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../css/Sceduleinterview.css"


import React,{useState,useEffect} from "react";
import axios from "axios";
import { myheaders,getCurrentUserid } from "../routes/auth";

function ScheduledInterview() {
  const [interviewers, setInterviewers] = useState([]);
  const [scheduled,setScheduled] = useState([])

    useEffect(() => {
         const token = myheaders(); 
         const id = getCurrentUserid();
         const apiurl = `http://127.0.0.1:9997/interviewer/InterviewSceduled/${id}`
          //console.log(apiurl)
        //console.log(headers)
        axios.get(apiurl, {headers: token})
         .then((result)=>{
         // console.log(result.data);
          //console.log(result.data.result);
          if(result.data.status=="success")
          {
              const arr =result.data.result
              //console.log(arr)
              setScheduled(arr)
              //console.log(arr)
          }
          else if (result.data.status=="error")
          {
            alert("Some Problem Occured")
          }
          else
          {
            alert("Something went wrong")
          }
    })
          .catch(err => console.error(err));
          
  }, []);  

  const renderSceduled = () => {
    return scheduled.map(item => (
        <div class="icard">
          <p> Title:-<strong>{item.Title}</strong></p>
          <p>Date:-{item.Date}</p>
      
        </div>       
    ));
  };



    return (
        <>
        <Navbar/>
        <div className="card-container">
            {scheduled.length>0&& renderSceduled()}
        </div>
   
        </>
      );
    }   

export default ScheduledInterview;