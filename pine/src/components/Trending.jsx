import "../style/Trending.css"
import NavBar from "./NavBar";
import TrendingArticle from "./TrendingArticle";

import fire from "../images/icons8-fire-30.png"
import trending1 from "../images/football.jpeg"
import trending2 from "../images/taylor-swift.webp"
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
                    <TrendingArticle
                        cover={eagles} 
                        heading="Eagles Win Super Bowl LVIII"
                        subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                        author="Will Smith"
                        date="February 11, 2024"
                        image={trending1}
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
                        cover={trending2} 
                        heading="How Does Football Work?"
                        subheading="America's favorite sport, according to singer-songwriter and pop superstar Taylor Swift."
                        author="Kory Grow"
                        date="February 9, 2024"
                        image={trending2}
                        credits="Photo by Mat Hayward"
                        body="Taylor Swift's nearly cult-like following is nothing if not committed, even if it means 
                        tackling a world potentially foreign to some fans. /n Following the 'Mastermind' singer's surprise 
                        appearance cheering for the Kansas City Chiefs against the Chicago Bears this season, Swifties 
                        are learning all they need to know about rumored love interest Travis Kelce and the sport of football.
                        /n One Swiftie uploaded a post that broke the game into the simplest possible terms. Many of the 
                        replies were from confused Swifties asking questions about the sport. “Okay, so what’s a down?” 
                        one person asked. Users asked questions like, “What’s a field goal” and “Do you throw the ball or 
                        run with it?”"
                    />
                </div>
            </div>

            <div id="nav-bar-style">
                <NavBar/> 
            </div>
        </div>
    )
}