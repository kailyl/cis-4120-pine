import React, { useState } from 'react';
import "../style/DropdownSaved.css"

export default function DropdownSaved(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        props.setSort(item);
        setIsOpen(false);
    };

    return (
        <div className="dropdown-container">
            <div id="sort-by">
                <p id="sort-text"> SORT BY </p>
                <button className="dropdown-button" onClick={toggleDropdown}>
                    <span className="dropdown-text">{selectedItem ? selectedItem : ''}</span>
                    <i className={`fas ${isOpen ? 'fa-caret-up' : 'fa-caret-down'} icon-right`}></i>
                </button>
            </div>
            {isOpen && (
                <div className="dropdown-content">
                    <a href="#" onClick={() => handleItemClick('')}> - </a>
                    <a href="#" onClick={() => handleItemClick('Date')}>Date</a>
                    <a href="#" onClick={() => handleItemClick('Title')}>Title</a>
                    <a href="#" onClick={() => handleItemClick('Author')}>Author</a>
                    <a href="#" onClick={() => handleItemClick('Popularity')}>Popularity</a>
                </div>
            )}
        </div>
    );
};
