// function Experts
// () {
//     return ( 
//         <h3>Our Experts</h3>
//      );
// }

// export default Experts
// ;

import React from 'react';
import '../css/Experts.css'; // Import the CSS file for styling
import Expert1Image from '../images/Expert1.jpg'; // Import image for Expert 1
import Expert2Image from '../images/Expert2.jpg'; // Import image for Expert 2
import Expert3Image from '../images/Expert3.jpg'; // Import image for Expert 3

function Experts() {
    return ( 
        <div className="experts-container">
            <h3>Our Experts</h3>
            <ul>
            <li>
        <img src={Expert1Image} alt="Expert 1" className="expert-image" />
        <br/><br/>
              <h5 style={{"textAlign": "center"}}>Web Developer</h5>
              <p>"Meet Kendall Jenner, our Web Developer crafting innovative digital experiences with expertise in front-end and back-end technologies."</p>
            </li>

            <li>
        <img src={Expert2Image} alt="Expert 2" className="expert-image" />
        <br/><br/>
              <h5 style={{"textAlign":"center"}}>Data Analyst</h5>
              <p> "Meet John Wick, our Data Analyst proficient in analyzing complex datasets and extracting valuable insights for informed decision-making."</p>
            </li>

            <li>
        <img src={Expert3Image} alt="Expert 3" className="expert-image" />
        <br/><br/>
        
              <h5 style={{"textAlign": "center"}}>Data Scientist</h5>
              <br/>
              <p>"Meet Alexa Demie, our Data Scientist leveraging machine learning and statistical analysis to drive actionable insights." </p>
            </li>
        


                {/* <li>
                    <img src={Expert2Image} alt="Expert 2" />
                    <p>Expert 2</p>
                </li>
                <li>
                    <img src={Expert3Image} alt="Expert 3" />
                    <p>Expert 3</p>
                </li> */}
                {/* Add more experts as needed */}
            </ul>
        </div>
     );
}

export default Experts;