import "../style/SavedArticle.css"

export default function SavedArticle(props) {
    return (
        <div id="savedArticle">
            <div id="top-component">
                <div id="headlines">
                    <h1 id="saved-headline">{props.headline}</h1>
                    <p id="saved-subheading">{props.subheading}</p>
                </div>
                <img src={props.image} id="saved-image"/>
            </div>
            <div id="author-date-info">
                <p id="saved-author">{props.author}</p>
                <p id="saved-date">{props.date}</p>
            </div>
        </div>
    )
}