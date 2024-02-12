import Navbar from "../users/Navbar1";
// DemoQuestion.js

import React, { useState } from 'react';
import "../css/DemoQuestion.css"
const DemoQuestion = ({ question, options, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      onSubmit(selectedOption);
    } else {
      alert('Please select an option before submitting.');
    }
  };

  return (
    <>
        <Navbar/>
        <div className="demo-question-container">
      <h2>{question}</h2>
      <div className="options-container">
        
      </div>
      
    </div>
    
    </>
  );
};

export default DemoQuestion;
