import "../style/SavedArticle.css"
import React, { useState } from "react";
import { animated } from "react-spring";
import ArticlePopup from "./ArticlePopup";

function SavedArticle(props) {
    const [showArticle, setShowArticle] = useState(false);

    return (
        <div id="savedArticle" onClick={() => !showArticle ? setShowArticle(true) : null}>
            <animated.div>
                <div id="top-component">
                    <div id="headlines">
                        <h1 id="saved-headline">{props.heading}</h1>
                        <p id="saved-subheading">{props.subheading}</p>
                    </div>
                    <img src={props.cover} id="saved-image"/>
                </div>
                <div id="author-date-info">
                    <p id="saved-author">{props.author}</p>
                    <p id="saved-date">{props.date}</p>
                </div>
            </animated.div>
            {showArticle ? 
            <ArticlePopup {...props} setShowArticle={setShowArticle} setSaved={props.setSaved}/> : 
            <div/>}
        </div>
    )
}
export default SavedArticle;