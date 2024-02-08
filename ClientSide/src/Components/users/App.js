
import Dashboard from "./Dashboard";
import DemoQuestion from "./DemoQuestion";
import Footer from "./Footer1";
import GetInterviewers from "./GetInterviewers";
import Navbar from "./Navbar1";
import PastInterviews from "./PastInterviews";
import Profile from "./Profile";
import ScheduleInterview from "./ScheduleInterview";
import { Switch,Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
    return ( 
    <div className="App">
        <Navbar/>
        <Switch>
            <Route  path="/dashboard" exact component={Dashboard}/>
            <Route exact path="/scheduleinterview"  component={ScheduleInterview}/>
            <Route exact path="/getinterviewers"  component={GetInterviewers}/>
            <Route exact path="/pastinterviews"  component={PastInterviews}/>
            <Route exact path="/demoquestion"  component={DemoQuestion}/>
            <Route exact path="/profile"  component={Profile}/>
            {/*<Route exact path="/users/dashboard" component={Dashboard}/>*/}
        </Switch>
        <Footer/>
    </div>
    
     );
}

export default App;