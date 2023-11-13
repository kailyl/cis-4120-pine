import "../style/ArticlePopup.css"

import bookmark from "../images/bookmark2.png"
import share from "../images/share.png"

function NewlineText(props) {
    const text = props.text;
    return text.split("/n").map(str => <p>{str}</p>);
}

export default function ArticlePopup(props) {
    return (
        <div id="article-popup">
            <button id="ex-button-popup" onClick={() => props.setShowArticle(false)}> X </button>
            <h1 id="article-heading"> {props.heading}</h1>
            <h3 id="article-subheading"> {props.subheading}</h3>
            <div id="author-info">
                <p id="authorArticle"> {props.author} </p>
                <p id="date"> {props.date} </p>
            </div>
            <div id="image-info">
                <img id="image" src={props.cover} height="80%" width="85%"></img>
                <p id="credits"> {props.credits} </p>
            </div>
            <div id="body">
                <NewlineText text={props.body} />
            </div>
        </div>
    )
}