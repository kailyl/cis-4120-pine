import "../style/Trending.css"

import NavBar from "./NavBar";

import eagles from "../images/eagles.png"
import gfire from "../images/green-fire-icon.png"

export default function Trending() {
    return (
        <div id="trending">
            <h1 id="trending-heading"> TRENDING</h1>

            <div className="trending-search-bar">
                <input type="text" placeholder="Search..." />
            </div>


            {/* <div id="trending-topic"> 
                <img id="image" src={gfire} alt="Eagles fans celebrating" height="80%" width="85%"></img>
                <h3 Eagles win Super Bowl </h3>
            </div> */}

            <div id="image-info">
                <img id="image" src={gfire} alt="Green fire icon" height="4%" width="4%"></img>
            </div>

            <h3 id="trending-topic"> Taylor Swift</h3>
            <h3 id="trending-topic"> New bill passes in Congress</h3>
            <h3 id="trending-topic"> Kanye runs for President</h3>
            <h3 id="trending-topic"> Pete Davidson engaged again</h3>
            <h3 id="trending-topic"> World keeps getting hotter</h3>


            
            <div id="image-info">
                <img id="image" src={eagles} alt="Eagles fans celebrating" height="80%" width="85%"></img>
                <p id="credits">Photo by Corey Perrine</p>
            </div>
            <div id="author-info">
                <p id="author"> Will Smith </p>
                <p id="date"> February 11, 2024</p>
            </div>

            <NavBar/> 
        </div>
    )
}