import React, { useState } from 'react';
import "../style/Dropdown.css"

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Fox News");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <div className="dropdown-container-2">
          <div id="sort-by-2">
            <button className="dropdown-button-2" onClick={toggleDropdown}>
              <span className="dropdown-text-2">{selectedItem ? selectedItem : ''}</span>
              <i className={`fas ${isOpen ? 'fa-caret-up' : 'fa-caret-down'} icon-right`}></i>
            </button>
          </div>
          {isOpen && (
            <div id="dropdown-content-2">
              <a href="#" onClick={() => handleItemClick('Fox News')}>Fox News</a>
              <a href="#" onClick={() => handleItemClick('MSNBC')}>MSNBC</a>
              <a href="#" onClick={() => handleItemClick('Breitbart')}>Breitbart</a>
              <a href="#" onClick={() => handleItemClick('The Huffington Post')}>The Huffington Post</a>
              <a href="#" onClick={() => handleItemClick('Russia Today')}>Russia Today</a>
              <a href="#" onClick={() => handleItemClick('Al Jazeera')}>Al Jazeera</a>
              <a href="#" onClick={() => handleItemClick('CNN')}>CNN</a>
              <a href="#" onClick={() => handleItemClick('Daily Mail')}>Daily Mail</a>
              <a href="#" onClick={() => handleItemClick('Info Wars')}>Info Wars</a>
            </div> 
          )}
      </div>
    );
};