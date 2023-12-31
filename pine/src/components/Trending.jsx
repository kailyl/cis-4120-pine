import "../style/Trending.css"
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import TrendingArticle from "./TrendingArticle";
import jsonData from '../data/trending-articles.json';

import fire from "../images/icons8-fire-30.png"

export default function Trending() {
    const [jsonDataState, setJsonDataState] = useState(null);
    const [trending, setTrending] = useState([]);
    const [saved, setSaved] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSave = (bookmarked) => {
        setSaved(bookmarked)
    }

    useEffect(() => {
        setJsonDataState(jsonData);
    }, []);

    useEffect(() => {
        if (jsonDataState) {
            const newArticles = jsonDataState.map((article) => {
                return (
                    <TrendingArticle
                        setSaved={handleSave}
                        cover={article.background} 
                        heading={article.heading}
                        subheading={article.subheading}
                        author={article.author}
                        date={article.date}
                        image={article.image}
                        credits={article.credits}
                        body={article.body}
                    />
                )
            })
            setTrending(newArticles);
        }
    }, [jsonDataState])

    return (
        <div id="trending">
            <h1 id="trending-heading"> TRENDING</h1>

            <div id="search-component">
                <div className="trending-search-bar">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                <Link to={`/search?q=${searchQuery}`}>
                    <button id="search-btn"> SEARCH </button>
                </Link>
            </div>
            
            <div id="trending-topics">
                <Link to="/search?q=Taylor Swift">
                    <div id="trending-topic-div">
                        <img id="image" src={fire} height="3.5%" width="3.5%"></img>
                        <h3 id="trending-topic"> Taylor Swift</h3>
                    </div>
                </Link>
                <Link to="/search?q=New bill passes in Congress">
                    <div id="trending-topic-div">
                        <img id="image" src={fire} height="3.5%" width="3.5%"></img>
                        <h3 id="trending-topic"> New bill passes in Congress </h3>
                    </div>
                </Link>
                <Link to="/search?q=Kanye runs for President">
                    <div id="trending-topic-div">
                        <img id="image" src={fire} height="3.5%" width="3.5%"></img>
                        <h3 id="trending-topic"> Kanye runs for President </h3>
                    </div>
                </Link>
                <Link to="/search?q=Pete Davidson engaged again">
                    <div id="trending-topic-div">
                        <img id="image" src={fire} height="3.5%" width="3.5%"></img>
                        <h3 id="trending-topic"> Pete Davidson engaged again </h3>
                    </div>
                </Link>
                <Link to="/search?q=World keeps getting hotter">
                    <div id="trending-topic-div">
                        <img id="image" src={fire} height="3.5%" width="3.5%"></img>
                        <h3 id="trending-topic"> World keeps getting hotter </h3>
                    </div>
                </Link>
            </div>

            <div id="trending-articles">
                <h1 id="most-popular"> Most Popular </h1>
                <div id="articles-div">
                    {trending}
                </div>
            </div>
            <NavBar savedArticle={saved}/> 
        </div>
    )
}