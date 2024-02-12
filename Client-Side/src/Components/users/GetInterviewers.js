import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from "../users/Navbar1";
import { getCurrentUser, myheaders } from "../routes/auth";

function GetInterviewers() {
    const [interviewers, setInterviewers] = useState([]);

    useEffect(() => {
        const headers = myheaders();

        axios.get("http://localhost:9997/interview/allInterviewer", { headers })
            .then(res => setInterviewers(res.data.result))
            .catch(err => console.log(err));
    }, []);

    const renderInterviewers = () => {
        return interviewers.map((interviewer,index) => (
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
                    <a href="#" className="card-link">Schedule Interview</a>
                    <a href="#" className="card-link">Check Feedbacks</a>
                </div>
            </div>
        ));
    };

    return (
        
        <>
            
            <center>
                 <Navbar />

                <h3>GetInterviewers</h3>
                <button onClick={() => console.log(interviewers)}>My interviewers button</button>
                <div className="container">
                    {renderInterviewers()}
                </div>
            </center>
        </>
    );
}

export default GetInterviewers;
