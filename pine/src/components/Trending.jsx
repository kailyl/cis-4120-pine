import "../style/Trending.css"
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import TrendingArticle from "./TrendingArticle";
import jsonData from '../data/trending-articles.json';

import fire from "../images/icons8-fire-30.png"

export default function Trending() {
    const [jsonDataState, setJsonDataState] = useState(null);
    const [trending, setTrending] = useState([]);
    const [saved, setSaved] = useState(false);

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

            <div className="trending-search-bar">
                <input type="text" placeholder="Search..." />
            </div>

            <div id="trending-topics">
                <div id="trending-topic-div">
                    <img id="image" src={fire} height="3.5%" width="3.5%"></img>
                    <h3 id="trending-topic"> Taylor Swift</h3>
                </div> 
                <div id="trending-topic-div">
                    <img id="image" src={fire} height="3.5%" width="3.5%"></img>
                    <h3 id="trending-topic"> New bill passes in Congress </h3>
                </div>
                <div id="trending-topic-div">
                    <img id="image" src={fire} height="3.5%" width="3.5%"></img>
                    <h3 id="trending-topic"> Kanye runs for President </h3>
                </div> 
                <div id="trending-topic-div">
                    <img id="image" src={fire} height="3.5%" width="3.5%"></img>
                    <h3 id="trending-topic">Pete Davidson engaged again </h3>
                </div>
                <div id="trending-topic-div">
                    <img id="image" src={fire} height="3.5%" width="3.5%"></img>
                    <h3 id="trending-topic">World keeps getting hotter </h3>
                </div>
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