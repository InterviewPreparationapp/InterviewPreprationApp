import "../css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import Register from "./Register";
import axios from "axios";
import ForgetPassword from "./ForgetPassword";
import { Link ,Route} from "react-router-dom/cjs/react-router-dom.min";
function Login() {

    const [credentials,setcredentials] = useState({"Uname":"","Password":""});
    const [isChecked,setIsChecked] = useState(false)

   const OnTextChange = (args)=>{
        var inputDataCopy = {...credentials};
        inputDataCopy[args.target.name]=args.target.value
        //console.log(inputDataCopy.Uname)
       // console.log(inputDataCopy.Password)
        setcredentials(inputDataCopy)
    }

    const OnCheckboxChange = ()=>{
        setIsChecked(!isChecked)
    }
   const onLogin = (e)=>
   {
    e.preventDefault()
    //alert(credentials.Uname+"  "+credentials.Password+"  "+isChecked)
    var copyofInput = {...credentials}
    axios.post("http://localhost:9997/user/login",copyofInput).then((result)=>{
          //console.log(result.data);
          //console.log(result.data.status);
          if(result.data.status=="success")
          {
            alert("User Login Successfully")
          }
          else if (result.data.status=="error")
          {
            alert("Login Failed")
          }
          else
          {
            alert("Something went wrong")
          }
    })
   } 





    return (  
        <>
           <center>
           <h1> Login</h1>
                <form>
                    <div className="LoginBox">
                    <div className="field">
                        <h2>Candidate</h2>
                            <div className="form-group">
                                <input type="text"
                                placeholder="Enter Your Email"
                                value={credentials.Uname} 
                                name="Uname" 
                                onChange={OnTextChange}/>
                                <span></span>
                            </div>
                            <br/>
                            <div className="form-group">
                                <input type="text"
                                placeholder="Enter Your Password"
                                value={credentials.Password} 
                                name="Password" 
                                onChange={OnTextChange}/>
                                <span></span>
                            </div>
                            
                            <div className="form-group">
                                <input type="checkbox" 
                                name="checkbox"
                                checked={isChecked}
                                onChange={OnCheckboxChange}/>
                                <label for="checkbox">Remember Me</label>
                            </div>

                            <div className="form-group">
                            <button onClick={onLogin}>Login</button> <br/> <br/>
                            <Link to="/register">Register Here</Link>
                            <br/> <br/>
                            <Link to="/forgetpassword">Forget Password</Link>
                            <Route exact path="/forgetpassword" component={ForgetPassword}/><br/> 
                            </div>                    
                    </div>
                    </div>

                </form>
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