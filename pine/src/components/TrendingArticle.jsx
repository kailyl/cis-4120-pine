import "../style/TrendingArticle.css"
import React, { useState } from "react";
import { animated } from "react-spring";
import ArticlePopup from "./ArticlePopup";

function TrendingArticle(props) {
    const [showArticle, setShowArticle] = useState(false);

    return (
    <div id="trendingArticle" onClick={() => !showArticle ? setShowArticle(true) : null}>
        <animated.div>
            <img src={props.image} id="trending-image"/>
            <h1 id="trending-headline">{props.heading}</h1>
            <p id="trending-subheading">{props.subheading}</p>
        </animated.div>
        {showArticle ? 
            <ArticlePopup {...props} setShowArticle={setShowArticle}/> : 
        <div/>}
    </div>
    )
}
export default TrendingArticle;