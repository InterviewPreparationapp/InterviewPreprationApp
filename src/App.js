import Navbar from "./Components/Navbar";
import Home from "./Components/routes/Home";
import Whyus from "./Components/routes/Whyus";
import About from "./Components/routes/About";
import Contact from "./Components/routes/Contact";
import Login from "./Components/routes/Login";
import Register from "./Components/routes/Register";
import Experts from './Components/routes/Experts';
import ForgetPassword from "./Components/routes/ForgetPassword";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Components/Footer";

function App() {
    return ( 
    <div className="App">
        <Navbar/>
        <Switch>
            <Route  path="/" exact component={Home}/>
            <Route exact path="/whyus"  component={Whyus}/>
            <Route exact path="/ourexperts"  component={Experts}/>
            <Route exact path="/about"  component={About}/>
            <Route exact path="/login"  component={Login}/>
            <Route exact path="/about"  component={About}/>
            <Route exact path="/contact"  component={Contact}/>
            <Route exact path="/register"  component={Register}/> 
            <Route exact path="/forgetpassword" component={ForgetPassword}/>
        </Switch>
        <Footer/>
    </div>
    
     );
}

export default App;