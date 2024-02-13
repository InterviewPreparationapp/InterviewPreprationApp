import Navbar from "../users/Navbar1";
import "../css/Sceduleinterview.css"
import { getCurrentUser, myheaders } from "../routes/auth";
import { useEffect, useState } from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

function ScheduleInterview() {
    const [interviewers, setInterviewers] = useState([]);
    const [selectedDate,setSelectedDate] = useState(null)
    const [FormData,setFormData] = useState({Date:"",Title:"",InterviewerSelection:""})
   // const [title,setTitle] = useState("")
    //const [selectinterviewer,setselectedinterviewer] = useState("")

    useEffect(() => {
        const headers = myheaders();

        axios.get("http://localhost:9997/interview/allInterviewer", { headers })
            .then(res => setInterviewers(res.data.result))
            .catch(err => console.log(err));


            
    }, []);

   
    
    const OnTextChange = (args)=>{
        var inputDataCopy = {...FormData};
        inputDataCopy[args.target.name]=args.target.value
        //console.log(inputDataCopy)
       // console.log(inputDataCopy)
        setFormData(inputDataCopy)
    }
    
    
    const maxDate = new Date("2024-12")
    const handledatechange=(date)=>
    {
        
        setFormData({
            ...FormData,
            Date:date
        })
    }
    const handleSave = (e)=>{
    e.preventDefault();
    if(!FormData.Date || !FormData.Title || !FormData.InterviewerSelection){
        alert("All Field is mandatory")
    }
    else{
        //console.log(FormData)
        const sqlFormattedDate = FormData.Date.toJSON().slice(0, 19).replace("T", " ");
        const data = getCurrentUser()
        const headers = myheaders();
        const requestBody = {
            Date:sqlFormattedDate,
            Title: FormData.Title,
            Interviewerid: FormData.InterviewerSelection,
            Userid:data.Userid
          };
        const url ="http://localhost:9997/interview/setInteview" ;
          console.log(requestBody)
        axios.post(url,requestBody ,{ headers })
             .then(res => console.log(res))
            .catch(err => console.log(err));
  
    }
    
    }

    const gettinginterviewer=()=>{
        console.log(FormData.Date);
        // const sqlFormattedDate = selectedDate.toISOString().slice(0, 19).replace('T', ' ');
        // console.log(sqlFormattedDate);
        
    }

    const renderInterviewers = () => {
        return interviewers.map(item => (
                <option value={item.Interviewerid}>{item.FirstName} {item.LastName}</option>       
        ));
      };


    return ( 
        <>
        <Navbar/>
        <h2 className="text-center">Sceduling Interview</h2> 
        <button onClick={gettinginterviewer}>get</button>
        <form className="container" onSubmit={handleSave}>
        <div className="container-form">
      
      <form>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <DatePicker
            selected={FormData.Date}
            onChange={handledatechange}
            dateFormat="Pp"
            minDate={(new Date())}
           maxDate={maxDate}
            showTimeSelect
            timeIntervals={30}
            timeFormat='hh:mm'
            
            />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text"
                id="title" 
                name="Title" 
                required value={FormData.Title}
                 onChange={OnTextChange}/>
        </div>
        
        <div className="form-group">
                    <div class="input-group mb-3">
            {/* <button class="btn btn-outline-secondary" type="button" onClick={navigating}>Goto</button> */}
                <select class="form-select"
                        name="InterviewerSelection"
                        id="inputGroupSelect03"
                        aria-label="Example select with button addon"
                        value={FormData.InterviewerSelection}
                        onChange={OnTextChange}>
                    <option  selected>Choose...</option>
                    {interviewers.length > 0 && renderInterviewers()}
                </select>
            </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block" onClick={handleSave}>Submit</button>
        
      </form>
    </div>
            

        </form>
       
        </>
     );
}

export default ScheduleInterview;
{/* <div className="header">
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
            </div> */}