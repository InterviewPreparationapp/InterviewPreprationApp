import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import "../css/interviewer.css"
import Navbar from "../Navbar";
function IntRegister() {
    
    const [FormData,setFormData] = useState({FirstName:"",LastName:"",
                                             Email:"",Password:"",
                                             CnfPassowrd:"",Mobile:"",
                                             Address:"",Dob:"",
                                            Qualification:"",Gender:"",
                                            CompanyPosition:"",
                                            });

    const [Error,setError] = useState(false);                                                                
    const [isSubmit,setisSumbit] =useState(false);
    const [ErrFirstName,setErrFirstName] = useState("");
    const [ErrLastName,setErrLastName] = useState("");
    const [ErrEmail,setErrEmail] = useState("");
    const [ErrPassword,setErrPassword] = useState("");
    const [ErrCnfPassword,setCnfErrPassword] = useState("");
    const [ErrMobile,setErrMobile] = useState("");
    const [ErrAddress,setErrAddress] = useState("");
    const [ErrDob,setErrDob] = useState("");
    const [ErrQualification,setErrQualification] = useState("");
    const [ErrGender,setErrGender] = useState("");
    const [ErrCompany,setErrCompany] = useState("");

    const navigate = useNavigate()

    //on text change
   const OnTextChange = (args)=>{
        var inputDataCopy = {...FormData};
        inputDataCopy[args.target.name]=args.target.value
        //console.log(inputDataCopy)
       // console.log(inputDataCopy)
        setFormData(inputDataCopy)
    }

    const submitReg = (e)=>
    {
      e.preventDefault()
      const input = JSON.stringify(FormData);
      var copy = {...FormData}      
      // console.log(validForm())
      // console.log(validDataForm())
      if(validForm() && validDataForm())
      {
       // alert("data is valid"+input)
        //console.log(input)
        axios.post("http://127.0.0.1:9997/interviewer/register",copy).then((result)=>{
          //console.log(result.data);
          //console.log(result.data.status);
          //console.log(result)
          if(result.data.status=="success")
          {
            alert("User Registerd Successfully")
           navigate("/ourexperts/login")
          }
          else if (result.data.status=="error")
          {
            alert("Email is already used")
          }
          else
          {
            alert("Something went wrong")
          }
        })
      }
      else{
        alert("data is invalid")
      }
    }
    
    const validForm=()=>{
      return (
        ErrFirstName === "" &&
        ErrLastName === "" &&
        ErrEmail === "" &&
        ErrPassword === "" &&
        ErrCnfPassword === "" &&
        ErrMobile === "" &&
        ErrAddress === "" &&
        ErrDob === "" &&
        ErrQualification === "" &&
        ErrGender === "" && ErrCompany === ""
      );
      
    }

    const validDataForm=()=>{
      return (
        FormData.FirstName !== "" &&
        FormData.LastName !== "" &&
        FormData.Email !== ""&&
        FormData.Password !== "" &&
        FormData.CnfPassowrd !== "" &&
        FormData.Mobile !== "" &&
        FormData.Address !== "" &&
        FormData.Dob !== "" &&
        FormData.Qualification !== "" &&
        FormData.Gender !== "" && FormData.CompanyPosition !==""
      );
      
    }

//validation code
   const validateField=(event)=>
   { //debugger;
    const { name, id, value } = event.target;
    switch(name)
    {
        case 'FirstName':
          const isValidInput = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(FormData.FirstName);
          if(FormData.FirstName=="")
          {
            setErrFirstName("First Name Cannot Be Blank")
          }
          else if(FormData.FirstName.length<4 &&FormData.FirstName.length<19){
          setErrFirstName("Name should not less than 4 and not greater than 19")
          }
          else if(!isValidInput){
            setErrFirstName("Name cannot be number or special symbols")
          }
          else{
            setErrFirstName("")
          }
        break;

        case 'LastName':
          const isValidLastName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(FormData.LastName);
          if(FormData.LastName=="")
          {
            setErrLastName("Last Name Cannot Be Blank")
          }
          else if(FormData.LastName.length<4 &&FormData.LastName.length<19){
            setErrLastName("Name should not less than 4 and not greater than 19")
          }
          else if(!isValidLastName){
            setErrLastName("Name cannot be number or special symbols")
          }
          else{
            setErrLastName("")
          }
        break;

        case 'Email':
          const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(FormData.Email);
          if(FormData.Email=="")
          {
            setErrEmail("Email Cannot Be Blank")
          }
          // else if(FormData.LastName.length<4 &&FormData.LastName.length<19){
          //   setErrEmail("Name should not less than 4 and not greater than 19")
          // }
          else if(!EmailRegex){
            setErrEmail("Email is Invalid")
          }
          else{
            setErrEmail("")
          }
        break;
        
        case 'Password':
          if(FormData.Password=="")
          {
            setErrPassword("Password Cannot Be Blank")
          }
          else{
            setErrPassword("")
          }
          break;

        case 'CnfPassowrd':
          var notblank =false;
          if(FormData.CnfPassowrd=="")
          {
            notblank = false;
            setCnfErrPassword("Confirm Password Cannot Be Blank")
          }
          else{
            notblank = true;
            setCnfErrPassword("")
          }
          if(notblank &&FormData.Password == FormData.CnfPassowrd)
          {
            setCnfErrPassword("")
          }
          else
          {
            setCnfErrPassword("Password Not Match")
          }
          break;
          
        case 'Mobile':
            if(FormData.Mobile=="")
          {
            setErrMobile("Mobile Cannot Be Blank")
          }
          else if(parseInt(FormData.Mobile)==NaN)
          {
            alert()
          }
          else{
            setErrMobile("")
          }
          break;
         
        case  'Address':
          if(FormData.Address=="")
          {
            setErrAddress("Address Cannot Be Blank")
          }
          else{
            setErrAddress("")
          }
          break;
        
        case 'Dob':
          if(FormData.Dob=="")
          {
            setErrDob("Dob Cannot Be Blank")
          }
          else{
            setErrDob("")
          }
          break;
        
        case  'Qualification':
          if(FormData.Qualification=="")
          {
            setErrQualification("Qualification Cannot Be Blank")
          }
          else{
            setErrQualification("")
          }
          break;
        case 'Gender':
          if(FormData.Gender=="")
          {
            setErrGender("Gender Cannot Be Blank")
          }
          else{
            setErrGender("")
          }
          break;

          case 'CompanyPosition':
          if(FormData.CompanyPosition=="")
          {
            setErrCompany("CompanyPosition Cannot Be Blank")
          }
          else{
            setErrGender("")
          }
          break;

    }
   }//end of validation code

   //clear data on clear button
    const clearData = ()=>{
        setFormData({
            FirstName:"",LastName:"",
            Email:"",Password:"",
            CnfPassowrd:"",Mobile:"",
            Address:"",Dob:"",
            Qualification:"",Gender:""
        })
    } 
    
    
    return ( 
       
        <div>
            <Navbar/>
           
                <center>
            <form  onSubmit={submitReg}>
            <div className="register-box">
                <h2> Register Interviewer</h2>
                
                <button className="btn btn-secondary"><Link to="/ourexperts" className="GoLink">Go Back</Link></button>
                <div>
                <label htmlFor="FirstName">First Name:</label>
                  <input 
                  className="form-control" 
                  type="text" 
                  value={FormData.FirstName} 
                  name="FirstName" 
                  onChange={OnTextChange}
                  onBlur={validateField}
                  minlength="4"
                  maxlength="18"
                  required>
                  </input>
                  <span>{ErrFirstName}</span>
                  <br/>
                </div>

                <div>
                <label htmlFor="LastName">Last Name:</label>
                  <input
                  className="form-control"
                  type="text" 
                  value={FormData.LastName}
                  name="LastName" 
                  minlength="4"
                  maxlength="18"
                  required
                  onBlur={validateField}
                  onChange={OnTextChange}>
                  </input>
                  <span>{ErrLastName}</span>
                  <br/>
                </div>

                <div>
                <label htmlFor="Email">Email</label>
                  <input
                  id="Email"
                  className="form-control"
                  type="Email"
                  placeholder="newuser@gmail.com"
                  value={FormData.Email}
                  name="Email"
                  required
                  onBlur={validateField}
                  onChange={OnTextChange}>
                  </input>
                  <span>{ErrEmail}</span>
                  <br/>
                </div>

                <div>
                <label htmlFor="Password">Password</label>
                  <input
                  id="Password"
                  className="form-control"
                  type="Password"
                  placeholder="xxxxxxx"
                  value={FormData.Password}
                  name="Password"
                  required
                  onBlur={validateField}
                  onChange={OnTextChange}>
                  </input>
                  <span>{ErrPassword}</span>
                  <br/>
                </div>

                <div>
                <label htmlFor="cnfPassword">Confirm Password</label>
                  <input
                  id="cnfPassword"
                  className="form-control"
                  type="text"
                  placeholder="Test@123"
                  value={FormData.CnfPassowrd}
                  name="CnfPassowrd"
                  required
                  onBlur={validateField}
                  onChange={OnTextChange}>
                  </input>
                  <span>{ErrCnfPassword}</span>
                  <br/>
                </div>

                <div>
                <label htmlFor="Mobileno">Mobile No:</label>
                  <input
                  id="Mobileno"
                  className="form-control"
                  type="text"
                  placeholder="eg@91xxxxx09"
                  value={FormData.Mobile}
                  name="Mobile"
                  required
                  onBlur={validateField}
                  onChange={OnTextChange}
                  minlength="10"
                  maxlength="10">
                  
                  </input>
                  <span>{ErrMobile}</span>
                  <br/>
                </div>

                <div>
                <label htmlFor="Address">Address:</label>
                  <input
                  id="Address"
                  className="form-control"
                  type="text" 
                  value={FormData.Address} 
                  name="Address" 
                  required
                  onBlur={validateField}
                  onChange={OnTextChange}>
                  </input>
                  <span>{ErrAddress}</span>
                  
                </div>

                <div>
                <label htmlFor="Dob">Date of Birth:</label>
                  <input
                 id="Dob"
                  className="form-control"
                  type="date"
                  value={FormData.Dob}
                  name="Dob"
                  required
                  onBlur={validateField}
                  onChange={OnTextChange}>
                  </input>
                  <span>{ErrDob}</span>
                  
                </div>

                <div>
                <label htmlFor="CompanyPosition">CompanyPosition</label>
                  <input
                 id="CompanyPosition"
                  className="form-control"
                  type="text"
                  value={FormData.CompanyPosition}
                  name="CompanyPosition"
                  placeholder="@ex HR recuriter"
                  required
                  onBlur={validateField}
                  onChange={OnTextChange}>
                  </input>
                  <span>{ErrCompany}</span>
                  
                </div>

                <div>
                <label htmlFor="Qualification">Highest Qualification:</label>
                  <input
                  id="Qualification"
                  type="text"
                  className="form-control"
                  placeholder="Eg@B.Tech/B.Sc"
                  value={FormData.Qualification}
                  name="Qualification"
                  required
                  onBlur={validateField}
                  onChange={OnTextChange}>
                  </input>
                  <span>{ErrQualification}</span>
                  
                </div>

                <div>
                <label htmlFor="gender">Gender:</label>
                <select id="gender" 
                name="Gender"
                className="form-select"
                placeholder="Select Gender"
                value={FormData.Gender}
                onBlur={validateField}
                onChange={OnTextChange}>
                  <option value="" disabled selected>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <span>{ErrGender}</span>
                </div>
                <div>
                  <input type="Submit" value="Submit" onClick={submitReg}></input>
                  {"  "}{"  "}{"    "}
                  <input type="button" value="Clear" onClick={clearData}></input>
                  <br/><br/>
                </div>
                
            </div>
            </form>
           
            

        </center>

        </div>
        
     );
    }


export default IntRegister;