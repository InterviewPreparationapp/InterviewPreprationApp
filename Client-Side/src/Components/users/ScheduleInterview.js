import { useState } from "react";
import Navbar from "../users/Navbar1";

function ScheduleInterview() {

    const data = {Date:"",Title:"",InterviewerSelection:""};
    const [FormData,setFormData] = useState(data)
    const OnTextChange =(e)=>{
        setFormData({...FormData,[e.target.name]:e.target.value})
        console.log(FormData)
    }
    const handleSave = (e)=>{
    e.preventDefault();
    if(!FormData.Date || !FormData.Title || !FormData.InterviewerSelection){
        alert("All Field is mandatory")
    }
    }
    return ( 
        <>
        <Navbar/>
        <center>
        <form className="container" onSubmit={handleSave}>
            <div className="header">
                <h2>Schedule Interview</h2>
            </div>
            <br/><br/>
            <div>
                Date: <input type="date" name="Date" value={FormData.Date} onChange={OnTextChange}></input>
            </div>
            <br/><br/>
            <div>
                Title: <input type="text" placeholder="Enter ur title" name="Title" value={FormData.Title} onChange={OnTextChange}>
                </input>
            </div>
            <br/><br/>
            <div>
                Interviewer Selection: <input type="text" placeholder="Select your interviewer" name="InterviewerSelection" value={FormData.InterviewerSelection} onChange={OnTextChange}>
                </input>
            </div>
            <br/><br/>
            <div>
                <button type="submit">Save</button>
            </div>
            

        </form>
        </center>
        </>
     );
}

export default ScheduleInterview;
