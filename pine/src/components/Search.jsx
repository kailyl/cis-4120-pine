import "../style/Search.css";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import SavedArticle from "./SavedArticle";
import allJsonData from '../data/all-articles.json'

export default function Search() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const q = searchParams.get("q") || '';

    const [searchInput, setSearchInput] = useState(q);
    const [isLoaded, setIsLoaded] = useState(false);

    const [allArticlesJsonDataState, setAllArticlesJsonDataState] = useState(null)
    const [allArticlesMapping, setAllArticlesMapping] = useState({})
    const [saved, setSaved] = useState(false);
    const [matchedResults, setMatchedResults] = useState(null)

    const handleSave = (bookmarked) => {
        setSaved(bookmarked)
    }

    useEffect(() => {
        if (allArticlesMapping) {
            handleSearch();
        }
    }, [allArticlesMapping, searchInput]);

    useEffect(() => {
        setAllArticlesJsonDataState(allJsonData);
    }, []);

    useEffect(() => {
        if (allArticlesJsonDataState) {
            const newArticles = {};
            
            allArticlesJsonDataState.forEach((article) => {
                const articleComponent = (
                    <SavedArticle
                        setSaved={handleSave}
                        cover={article.background} 
                        heading={article.heading}
                        subheading={article.subheading}
                        author={article.author}
                        date={article.date}
                        image={article.image}
                        credits={article.credits}
                        body={article.body}
                        tags={article.tags}
                    />
                );
                
                newArticles[article.heading] = articleComponent;
            });
    
            setAllArticlesMapping(newArticles);
        }
    }, [allArticlesJsonDataState]);

    useEffect(() => {
        setSearchInput(q);
    }, [q]);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSearch = () => {
        const searchWords = searchInput.toLowerCase().split(/\s+/);
    
        const matchingArticleComponents = Object.entries(allArticlesMapping).reduce((acc, [articleTitle, articleComponent]) => {
            const articleWords = articleTitle.toLowerCase().split(/\s+/);
    
            if (searchWords.some((searchWord) => articleWords.some((articleWord) => articleWord.includes(searchWord) && !['and', 'or', 'not'].includes(searchWord)))) {
                acc.push(articleComponent);
            }
    
            return acc;
        }, []);
    
        setMatchedResults(() => matchingArticleComponents);
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
            <div id="search-results"> 
                {matchedResults && matchedResults.length > 0 ? (
                    matchedResults.map((result, index) => (
                        <div key={index}>{result}</div>
                    ))
                ) : (
                    <p id="no-results">No matching articles found.</p>
                )}
            </div>
            <NavBar savedArticle={saved}/>
        </div>
    );
}
