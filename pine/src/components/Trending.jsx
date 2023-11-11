import "../style/Trending.css"

import NavBar from "./NavBar";
import TrendingArticle from "./TrendingArticle";

import fire from "../images/fire.png"
import background from "../images/football.jpeg"

export default function Trending() {
    return (
        <div id="trending">
            <h1 id="trending-heading"> TRENDING</h1>

            <div className="trending-search-bar">
                <input type="text" placeholder="Search..." />
            </div>

            <div id="trending-topics">
                <div id="trending-topic-div">
                    <img id="image" src={fire} height="4%" width="4%"></img>
                    <h3 id="trending-topic"> Taylor Swift</h3>
                </div> 
                <div id="trending-topic-div">
                    <img id="image" src={fire} height="4%" width="4%"></img>
                    <h3 id="trending-topic"> New bill passes in Congress </h3>
                </div>
                <div id="trending-topic-div">
                    <img id="image" src={fire} height="4%" width="4%"></img>
                    <h3 id="trending-topic"> Kanye runs for President </h3>
                </div> 
                <div id="trending-topic-div">
                    <img id="image" src={fire} height="4%" width="4%"></img>
                    <h3 id="trending-topic">Pete Davidson engaged again </h3>
                </div>
                <div id="trending-topic-div">
                    <img id="image" src={fire} height="4%" width="4%"></img>
                    <h3 id="trending-topic">World keeps getting hotter </h3>
                </div>
            </div>

            <div id="trending-articles">
                <h1 id="most-popular"> Most Popular </h1>
                <div id="articles-div">
                    <TrendingArticle
                        headline="Eagles Win Super Bowl LVIII"
                        subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                        image={background}
                    />
                    <TrendingArticle
                        headline="Eagles Win Super Bowl LVIII"
                        subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                        image={background}
                    />
                </div>
            </div>

            <div id="nav-bar-style">
                <NavBar/> 
            </div>
        </div>
    )
}