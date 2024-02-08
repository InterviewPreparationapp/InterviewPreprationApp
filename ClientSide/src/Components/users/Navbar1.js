import "../css/Navbar.css"
import image1 from"../images/e.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Component } from "react";

class  Navbar extends Component {
    state = { clicked:false};
    handledClick = ()=>{
        this.setState({clicked:!this.state.clicked})
    }

    render(){
        return (
            <>
                <nav>
                    <a href="#"><Link to="/">
                        <img src={image1} id="logo"></img>
                        </Link></a>
                    <div>
                    <ul id="navbar" className={this.state.clicked?"#navbar active":"#navbar"}>
                        <li> <Link to="/dashboard">Dashboard</Link></li>
                        <li> <Link to="/scheduleInterview">Schedule Interview</Link></li>
                        <li> <Link to="/getinterviewers">Get Interviewers</Link></li>
                        <li> <Link to="/pastinterviews">Past Interviews</Link></li>
                        <li> <Link to="/demoquestion">Demo Question</Link></li>
                        <li> <Link to="/profile">Profile</Link></li>
                        
                    </ul>
                    </div>
                    <div id="mobile" onClick={this.handledClick}>
                        <i id="bars"
                        className={this.state.clicked ? "fas fa-times":"fas fa-bars"}
                        ></i>
                    </div>
                    
                </nav>
            </>
          );
}
}
export default Navbar;