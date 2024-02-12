import "../css/Login.css";
import { useEffect, useState } from "react";
function Register() {

    const [FormData,setFormData] = useState({"FName":"","LName":"",
                                             "Email":"","Password":"",
                                             "CnfPassowrd":"","MobileNo":"",
                                             "Address":"","DOB":"",
                                            "Qualification":"","Gender":""
                                            });

    const [Error,setError] = useState({})
    const [isSubmit,setisSumbit] =useState(false);
   const OnTextChange = (args)=>{
        var inputDataCopy = {...FormData};
        inputDataCopy[args.target.name]=args.target.value
        console.log(inputDataCopy)
        console.log(inputDataCopy)
        setFormData(inputDataCopy)
    }

    const submitReg = (e)=>{
        e.preventDefault();
        setError(validate(FormData));
       setisSumbit(true); 
    }


    const clearData = ()=>{
        setFormData({
            FName:"",LName:"",
            Email:"",Password:"",
            CnfPassowrd:"",MobileNo:"",
            Address:"",DOB:"",
            Qualification:"",Gender:""
        })
    }                                  
    useEffect(()=>{
        console.log(Error)    
            if(Object.keys(Error).length==0 && isSubmit)
            console.log(FormData);    
    },[Error]);
    
//     const SetMessage=(messageToBeSet)=>{
//         setmessage(messageToBeSet);
//         setTimeout(() => {
//                             setmessage("");
//                        }, 5000);
//    }

    const validate=(values)=>{
        const errors = {}
        const regex = null;
        if(values.FName.length==0)
        {
            errors.FName = "First Name Cannot Be Empty"
        }
        else if(values.LName.length==0)
        {
            errors.LName = "Last Name Cannot Be Empty"
        }
        else if(values.Email.length==0)
        {
            errors.Email = "Email Cannot Be Empty"
        }
        else if(values.Password.length==0 )
        {
            errors.Password = "Password Cannot Be Empty"
        }
        else if(values.CnfPassowrd.length==0)
        {
            errors.CnfPassowrd = "Confirm Password Cannot Be Empty"
        }
        else if(values.MobileNo.length==0)
        {
            errors.MobileNo = "Mobile No. Cannot Be Empty"
        }
        else if(values.Address.length==0)
        {
            errors.Address = "Address Cannot Be Empty"
        }
       else if(!values.DOB)
        {
            errors.DOB = "DOB Cannot Be Empty"
        }
        else if(values.Qualification.length==0)
        {
            errors.Qualification = "Qualification Cannot Be Blank"
        }
       else if(values.Gender.length==0)
        {
            errors.Gender = "Gender Cannot Be Blank"
        }
        
        return errors;
    }
    

    return ( 
        <center>
            <form  onSubmit={submitReg}>
            <div className="LoginBox">
                <h3 style={{"font-family": "Protest Riot, sans-serif",color: "#325b5d",textAlign:"center", padding:"20px"}}> Register</h3>
                <div>
                  <input type="text" placeholder="Enter Your First Name" value={FormData.FName} name="FName" onChange={OnTextChange}></input>
                  {Error.FName && <div style={{color:"red"}}> {Error.FName}</div>}
                  <br/><br/>
                </div>
                <div>
                  <input type="text" placeholder="Enter Your Last Name" value={FormData.LName} name="LName" onChange={OnTextChange}></input>
                  {Error.LName && <div style={{color:"red"}}> {Error.LName}</div>}
                  <br/><br/>
                </div>
                <div>
                  <input type="text" placeholder="Enter Your Email" value={FormData.Email} name="Email" onChange={OnTextChange}></input>
                  {Error.Email && <div style={{color:"red"}}> {Error.Email}</div>}
                  <br/><br/>
                </div>
                <div>
                  <input type="text" placeholder="Enter Password" value={FormData.Password} name="Password" onChange={OnTextChange}></input>
                  {Error.Password && <div style={{color:"red"}}> {Error.Password}</div>}
                  <br/><br/>
                </div>
                <div>
                  <input type="text" placeholder="Confirm Password" value={FormData.CnfPassowrd} name="CnfPassowrd" onChange={OnTextChange}></input>
                  {Error.CnfPassowrd && <div style={{color:"red"}}> {Error.CnfPassowrd}</div>}
                  <br/><br/>
                </div>
                <div>
                  <input type="text" placeholder="Enter Mobile No." value={FormData.MobileNo} name="MobileNo" onChange={OnTextChange}></input>
                  {Error.MobileNo && <div style={{color:"red"}}> {Error.MobileNo}</div>}
                  <br/><br/>
                </div>
                <div>
                  <input type="text" placeholder="Enter Your Address" value={FormData.Address} name="Address" onChange={OnTextChange}></input>
                  {Error.Address && <div style={{color:"red"}}> {Error.Address}</div>}
                  <br/><br/>
                </div>
                <div>
                  <input type="date" placeholder="Enter Your D.O.B.>" value={FormData.DOB} name="DOB" onChange={OnTextChange}></input>
                  {Error.DOB && <div style={{color:"red"}}> {Error.DOB}</div>}
                  <br/><br/>
                </div>
                <div>
                  <input type="text" placeholder="Enter Highest Qualification" value={FormData.Qualification} name="Qualification" onChange={OnTextChange}></input>
                  {Error.Qualification && <div style={{color:"red"}}> {Error.Qualification}</div>}
                  <br/><br/>
                </div>
                <div>
                  <input type="option" placeholder="Select Gender" value={FormData.Gender} name="Gender" onChange={OnTextChange}></input>
                  {Error.Gender && <div style={{color:"red"}}> {Error.Gender}</div>}
                  <br/><br/>
                </div>
                <div>
                  <input type="Submit" value="Submit" onClick={submitReg}></input>
                  {"  "}{"  "}{"    "}
                  <input type="button" value="Clear" onClick={clearData}></input>
                  <br/><br/>
                </div>
                
            </div>
            </form>
            {/* <div className='alert alert-success' 
                            style={{color: "black"}}>
                             {message}
            </div> */}
        </center>
        
     );
    }
export default Register;