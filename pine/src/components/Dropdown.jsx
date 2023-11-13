import React, { useState } from 'react';
import "../style/Dropdown.css"
import add from "../images/add-button.png"

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['ASSOCIATED PRESS (AP)', 'FOX NEWS', 'NEW YORK TIMES'];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = () => {
    console.log('Selected Option:', selectedOption);
  };

  return (
    <div className = "dropdown-container">
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div>
        <button id="dropdown-button" onClick={handleButtonClick}>ADD</button>
      </div>
    </div>
  );
};
export default Dropdown;
