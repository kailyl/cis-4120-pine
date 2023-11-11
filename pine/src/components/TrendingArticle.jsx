import "../style/TrendingArticle.css"

export default function TrendingArticle(props) {
    return (
        <div id="trendingArticle">
            <img src={props.image} id="trending-image"/>
            <h1 id="trending-headline">{props.headline}</h1>
            <p id="trending-subheading">{props.subheading}</p>
        </div>
    )
}