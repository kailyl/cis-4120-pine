import "../style/ArticlePopup.css"
import React, { useState, useEffect } from "react";

function NewlineText(props) {
    const text = props.text;
    return text.split("/n").map(str => <p>{str}</p>);
}

export default function ArticlePopup(props) {
    const [bookmarked, setBookmarked] = useState(false);

    useEffect(() => {
        const savedArticles = localStorage.getItem('savedArticles');
        if (savedArticles) {
            let saved = JSON.parse(savedArticles)
            if (saved.indexOf(props.heading) > -1) {
                setBookmarked(true)
            }
        }
    }, []);

    return (
        <div id="parent">
            <div id="article-popup">
                <div id="article-top-nav-2">
                    <button id="ellipses-button-2"><i className="fas fa-ellipsis-h"></i></button>
                    <button id="ex-button-2" onClick={() => props.setShowArticle(false)}><i className="fas fa-times"></i></button>
                    <button id="save-button-2" 
                        onClick={() => {
                            let savedArticles = localStorage.getItem('savedArticles');
                            if (savedArticles) {
                                let saved = JSON.parse(savedArticles);
                                if (!bookmarked) {
                                    saved == null ? saved = [props.heading] : saved.push(props.heading)
                                } else {
                                    let index = saved.indexOf(props.heading);
                                    if (index !== -1) {
                                        saved.splice(index, 1)
                                    }
                                }
                                localStorage.setItem('savedArticles', JSON.stringify(saved))
                            } else {
                                let saved = [props.heading]
                                localStorage.setItem('savedArticles', JSON.stringify(saved))
                            }
                            props.setSaved(!bookmarked);
                            setBookmarked(!bookmarked);
                        }}>
                        <i className={bookmarked ? "fas fa-bookmark" : "far fa-bookmark"}></i>
                    </button>
                </div>
                <h1 id="article-heading-2"> {props.heading}</h1>
                <h3 id="article-subheading"> {props.subheading}</h3>
                <div id="author-info">
                    <p id="authorArticle"> {props.author} </p>
                    <p id="date"> {props.date} </p>
                </div>
                <div id="image-info">
                    <img id="image" src={props.image} height="80%" width="85%"></img>
                    <p id="credits"> {props.credits} </p>
                </div>
                <div id="body">
                    <NewlineText text={props.body} />
                </div>
            </div>
        </div>
    )
}