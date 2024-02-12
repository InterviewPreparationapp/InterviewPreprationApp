import "../css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import Register from "./Register";
function Login() {

    const [credentials,setcredentials] = useState({"Uname":"","Password":""});

   const OnTextChange = (args)=>{
        var inputDataCopy = {...credentials};
        inputDataCopy[args.target.name]=args.target.value
        console.log(inputDataCopy.Uname)
        console.log(inputDataCopy.Password)
        setcredentials(inputDataCopy)
    }
    return (  
        <>
           <center>
           <h2 style={{"font-family": "Protest Riot, sans-serif",color: "#325b5d",textAlign:"center", padding:"20px"}}> Login</h2>
           <div className="LoginBox">
                <div className="field">
                    <div className="login">
                    <h3 style={{"font-family": "Protest Riot, sans-serif",color: "#325b5d",textAlign:"center", padding:"20px"}}>Candidate</h3>
                        <div className="form-group">
                        <input type="text" placeholder="Enter Your Email" value={credentials.Uname} name="Uname" onChange={OnTextChange}/>
                        </div>
                        <br/>
                        <div className="form-group">
                        <input type="text" placeholder="Enter Your Password" value={credentials.Password} name="Password" onChange={OnTextChange}/>
                        </div>
                        
                        <div className="form-group" >
                        <span style={{display:"inline-block", marginRight:"10px"}}><input type="checkbox" ></input></span>
                          <span style={{display:"inline-block"}}> <label >Remember Me</label></span>
                            
                        </div>


                       
                        <div className="form-group">
                        <center>
                        <button>Login</button>
                       
                                 <br/> <br/>
                        <a href="/register">Register
                        </a>
                        <br/> 
                        <a href="/forgetpassword">Forgot your password?</a>
                        </center>
                        </div>
                        

                    </div>
                </div>
           </div>
           </center>
      
        </>
    );
}

export default Login;

{/* <input type="text" placeholder="Enter Your Email" value={credentials.Uname} name="Uname" onChange={OnTextChange}/>
                    <br/> <br/> 
                    <input type="text" placeholder="Enter Your Password" value={credentials.Password} name="Password" onChange={OnTextChange}/>
                    <br/> <br/> 
                    <input type="checkbox" id="remember" name="remember"/>
                    <label for="remember"> Remember me</label>
                    <br/> <br/>
                    <button>Login</button>
                    <br/> <br/>
                    <a href="#">Forgot your password?</a> */}