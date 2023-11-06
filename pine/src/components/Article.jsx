import "../style/Article.css"

import eagles from "../images/eagles.png"

export default function Article() {
    return (
        <div id="article">
            <h1 id="article-heading"> EAGLES WIN SUPER BOWL LVIII</h1>
            <h3 id="article-subheading"> From greasy fingers to greasier poles, here’s how 
                Philadelphia celebrated the historic victory. 
            </h3>
            <div id="author-info">
                <p id="author"> Will Smith </p>
                <p id="date"> February 11, 2024</p>
            </div>
            <div id="image-info">
                <img id="image" src={eagles} alt="Eagles fans celebrating" height="80%" width="85%"></img>
                <p id="credits">Photo by Corey Perrine</p>
            </div>
            <div id="body">
                <p>
                    Philadelphia Eagles fans went wild after their team made history Sunday night with 
                    its second Super Bowl victory.
                </p>
                <p>
                    Eagles fans celebrated the historic win by pouring into the streets to cheer, cry, set off 
                    fireworks, scale street poles, and break hotel awnings. By Monday morning, plants and street 
                    signs were uprooted and cars were flipped over as fans celebrated a win.
                </p>
            </div>
        </div>
    )
}