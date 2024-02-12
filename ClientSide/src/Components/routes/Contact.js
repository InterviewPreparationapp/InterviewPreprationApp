// function Contact() {
//     return (  
//         <h>Please Contact</h>
//     );
// }

// export default Contact;

import React from 'react';
import '../css/Contact.css';
function Contact() {
    return (  
        <div className="contact-container">
            <center>
            <h3 style={{"font-family": "Protest Riot, sans-serif",color: "#325b5d",textAlign:"center", padding:"20px"}}>Contact Us</h3>
            <p style={{textAlign: "center"}}> If you have any questions, feedback, or inquiries, please feel free to reach out to us using the form below or by contacting us directly.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        

            <p className="contact-info">You can also email us at <a href="mailto:InterviewPreparationWebApp@gmail.com">InterviewPreparationWebApp@gmail.com</a> or call us at <a href="tel:+919898989898">+919898989898</a>.</p>
            </center>
        
        </div>
    );
    function handleSubmit(event) {
        event.preventDefault();
        // You can handle form submission here
        console.log("Form submitted!");
    }
}


export default Contact;
