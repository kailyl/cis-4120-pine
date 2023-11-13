import "../style/Trending.css"
import NavBar from "./NavBar";
import TrendingArticle from "./TrendingArticle";

import fire from "../images/fire.png"
import background from "../images/football.jpeg"
import eagles from "../images/img.jpeg"

export default function Trending(props) {
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
                        cover={eagles} 
                        heading="Eagles Win Super Bowl LVIII"
                        subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                        author="Will Smith"
                        date="February 11, 2024"
                        image={background}
                        credits="Photo by Corey Perrine"
                        body="Philadelphia Eagles fans went wild after their team made history Sunday night with 
                        its second Super Bowl victory. /n Eagles fans celebrated the historic win by pouring into 
                        the streets to cheer, cry, set off fireworks, scale street poles, and break hotel awnings. 
                        By Monday morning, plants and street signs were uprooted and cars were flipped over as 
                        fans celebrated a win. /n Philadelphia Eagles fans went wild after their team made history Sunday night with 
                        its second Super Bowl victory. /n Eagles fans celebrated the historic win by pouring into 
                        the streets to cheer, cry, set off fireworks, scale street poles, and break hotel awnings. 
                        By Monday morning, plants and street signs were uprooted and cars were flipped over as 
                        fans celebrated a win."
                    />
                    <TrendingArticle
                        cover={eagles} 
                        heading="Eagles Win Super Bowl LVIII"
                        subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                        author="Will Smith"
                        date="February 11, 2024"
                        image={background}
                        credits="Photo by Corey Perrine"
                        body="Philadelphia Eagles fans went wild after their team made history Sunday night with 
                        its second Super Bowl victory. /n Eagles fans celebrated the historic win by pouring into 
                        the streets to cheer, cry, set off fireworks, scale street poles, and break hotel awnings. 
                        By Monday morning, plants and street signs were uprooted and cars were flipped over as 
                        fans celebrated a win."
                    />
                </div>
            </div>

            <div id="nav-bar-style">
                <NavBar/> 
            </div>
        </div>
    )
}