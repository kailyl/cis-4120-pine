import "../style/Search.css";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

export default function Search() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const q = searchParams.get("q") || '';

    const [searchInput, setSearchInput] = useState(q);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Update the input value when the 'q' parameter changes
        setSearchInput(q);
    }, [q]);

    useEffect(() => {
        // Set isLoaded to true after the component has mounted
        setIsLoaded(true);
    }, []);

    const handleInputChange = (event) => {
        // Update the searchInput state when the user types
        setSearchInput(event.target.value);
    };

    const handleSearch = () => {
        // Implement your search logic here
        console.log("Perform search for:", searchInput);
    };

    return (
        <div id="search">
            <h1 id="search-heading"> SEARCH </h1>

            <div id="search-component">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={handleInputChange}
                    />
                </div>
                <button id="search-btn" onClick={handleSearch}>
                    SEARCH
                </button>
            </div>

            <h1>Search Results for "{q}"</h1>

            <NavBar />
        </div>
    );
}
