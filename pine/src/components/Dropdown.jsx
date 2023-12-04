import React, { useState } from 'react';
import "../style/Dropdown.css"

export default function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
        props.setCurrentSource(item)
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
              {props.sources.map((source, index) => (
                <a href="#" key={index} onClick={() => handleItemClick(source)}>
                  {source}
                </a>
              ))}
            </div> 
          )}
      </div>
    );
};