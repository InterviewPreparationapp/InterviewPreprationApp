import "../css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import Register from "./Register";
import ForgetPassword from "./ForgetPassword";
import { Link ,Route} from "react-router-dom/cjs/react-router-dom.min";
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
           <h1> Login</h1>
           <div className="LoginBox">
                <div className="field">
                    <div className="login">
                    <h2>Candidate</h2>
                        <div className="form-group">
                        <input type="text" placeholder="Enter Your Email" value={credentials.Uname} name="Uname" onChange={OnTextChange}/>
                        </div>
                        <br/>
                        <div className="form-group">
                        <input type="text" placeholder="Enter Your Password" value={credentials.Password} name="Password" onChange={OnTextChange}/>
                        </div>
                        
                        <div className="form-group">
                            <input type="checkbox" name="checkbox"></input>
                            <label for="checkbox">Remember Me</label>
                        </div>

                        <div className="form-group">
                        <button>Login</button> <br/> <br/>
                        <Link to="/register">Register Here</Link>
                        <br/> <br/>
                        <Link to="/forgetpassword">Forget Password</Link>
                        <Route exact path="/forgetpassword" component={ForgetPassword}/><br/> 
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