import Navbar from "./Navbar";
import "../css/Sceduleinterview.css"

function ScheduledInterview() {




  
    return (
        <>
        <Navbar/>
        <div className="card">
              <div style={{backgroundColor:"whitesmoke"}}>
                <div class="icard">
                  <p> Title:-<strong>My Title</strong></p>
                  <p>Date:-My Date</p>
                  <p >Status</p>
                </div> 
                <div class="icard">
                  <p> Title:-<strong>My Title</strong></p>
                  <p>Date:-My Date</p>
                  <p >Status</p>
                </div> 
                <div class="icard">
                  <p> Title:-<strong>My Title</strong></p>
                  <p>Date:-My Date</p>
                  <p >Status</p>
                </div> 
              </div>
          </div>
        </>
      );
}

export default ScheduledInterview;