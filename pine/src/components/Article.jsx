import "../style/Article.css"

function NewlineText(props) {
    const text = props.text;
    return text.split("/n").map(str => <p>{str}</p>);
}

export default function Article(props) {

    return (
        <div id="article">
            <button id="ex-button" onClick={() => props.setShowArticle(false)}><i className="fas fa-times"></i></button>
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