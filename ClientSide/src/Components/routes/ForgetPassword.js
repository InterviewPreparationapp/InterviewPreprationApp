import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../css/ForgetPassword.css"
import { useState } from "react";

function ForgetPassword() {

const [Email,SetEmail] = useState('')
const [name,SetName] = useState('')
const [passowrd,SetPassword] = useState('')
const [Cpassowrd,SetCPassword] = useState('')



const history = useHistory();
    const ChangePassword = ()=>
    {
        
    }

    const Cancel = ()=>
    {
        history.push("/login")
    }

    return ( 
        <>
           <center>
                <div id="container">
                    <h2>Change Your Password</h2>
                    <div>
                        <input type="text" placeholder="Enter Your Email" onChange={(e)=>{}}/> <br/><br/>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter Your Name"/> <br/><br/>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter Your Password"/> <br/><br/>
                    </div>
                    <div>
                        <input type="text" placeholder="Confirm Password"/><br/><br/>
                    </div>
                    <div>
                        <input type="button" value="Submit" onClick={ChangePassword}/> {"  "}
                        <input type="button" value="Cancel" onClick={Cancel}/><br/><br/>
                    </div>
                </div>
           </center>
        </>
     );
}

export default ForgetPassword;