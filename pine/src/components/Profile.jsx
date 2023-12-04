import "../style/Profile.css"
import React, { useEffect, useState } from 'react';

import NavBar from "./NavBar";
import Dropdown from "./Dropdown";
import TagList from './TagList';

export default function Profile() {
    const [restricted, setRestricted] = useState([]);
    const [filteredSources, setFilteredSources] = useState([]);
    const [currentSource, setCurrentSource] = useState(null);
    const [newInterest, setNewInterest] = useState(""); // New state for the input value
    const [interests, setInterests] = useState([
        "politics", 
        "world news", 
        "media", 
        "technology", 
        "us news", 
        "sports", 
        "health", 
        "science", 
        "business"
    ])

    const allSources = [
        "ABC", 
        "ASSOCIATED PRESS", 
        "BBC", 
        "BLOOMBERG",
        "BREITBART", 
        "CBS", 
        "CNN", 
        "DAILY MAIL", 
        "FORBES", 
        "FOX NEWS", 
        "HUFFINGTON POST", 
        "MSNBC", 
        "NBC", 
        "NEWSWEEK",
        "NEW YORK TIMES", 
        "NPR", 
        "PBS",
        "REUTERS",
        "TELEGRAPH", 
        "THE ATLANTIC",
        "THE GUARDIAN",
        "THE NEW YORKER",
        "TIME", 
        "VOX",
        "WALL STREET JOURNAL", 
        "WASHINGTON POST"
    ]

    useEffect(() => {
        const restrictedSources = localStorage.getItem('restrictedSources');
        if (restrictedSources) {
            setRestricted(JSON.parse(restrictedSources))
        }
        const interests = localStorage.getItem('interests');
        if (interests) {
            setInterests(JSON.parse(interests))
        }
    }, []);

    useEffect(() => {
        const newFilteredSources = allSources.filter(source => !restricted.includes(source));
        setFilteredSources(newFilteredSources);
    }, [restricted]);

    const removeTag = (tag) => {
        const updatedInterests = interests.filter(item => item !== tag);
        setInterests(updatedInterests);
        localStorage.setItem('interests', JSON.stringify(updatedInterests));
    }

    const handleAddClick = () => {
        const newSource = currentSource
        if (currentSource && !restricted.includes(newSource)) {
            const newRestricted = [...restricted, newSource]
            setRestricted(newRestricted)
            localStorage.setItem('restrictedSources', JSON.stringify(newRestricted));
        }
    }

    const handleAddInterest = () => {
        if (newInterest.trim() !== "") {
            const newInterests = [...interests, newInterest.trim().toLowerCase()];
            setInterests(newInterests);
            localStorage.setItem('interests', JSON.stringify(newInterests));
            setNewInterest("");
        }
    }

    const handleRemoveRestricted = (source) => {
        const updatedRestricted = restricted.filter(item => item !== source);
        setRestricted(updatedRestricted);
        localStorage.setItem('restrictedSources', JSON.stringify(updatedRestricted));
    }

    return (
        <div id="profile">
            <div id = "profile-div">
                <h1 id="profile-heading"> YOUR PROFILE</h1>

                <p id="profile-name">{"Armando Christian Pérez"}</p>
                <p id="profile-email">{"mr.worldwide@gmail.com"}</p>

                <h2 id="profile-subheading"> Interests</h2>
                <div id="search-add">
                    <div className="profile-search-bar">
                        <input 
                            type="text" 
                            id="search-bar"
                            placeholder="Search..." 
                            value={newInterest}
                            onChange={(e) => setNewInterest(e.target.value)}
                        />
                    </div>
                    <button id="add-2" onClick={handleAddInterest}>ADD</button>
                </div>
                <TagList interests={interests} removeTag={removeTag}/>
                <h2 id="profile-subheading"> Restricted Sources</h2>
                <div id="restricted">
                    <Dropdown sources={filteredSources} setCurrentSource={setCurrentSource}/>
                    <button id="add" onClick={handleAddClick}>ADD</button>
                </div>
                <div id="restricted-sources"> 
                {restricted.map((item) => (
                    <div id="source-button">
                        <button key={item} id="source" onClick={() => handleRemoveRestricted(item)}>{item}</button>
                        <i className="fas fa-times"></i>
                    </div> 
                ))}
                </div>
            </div>
            <div id="nav-bar">
                <NavBar/> 
            </div>
        </div>
    )
}