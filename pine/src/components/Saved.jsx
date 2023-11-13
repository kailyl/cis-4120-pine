import "../style/Saved.css"
import NavBar from "./NavBar";
import SavedArticle from "./SavedArticle";

import cover from "../images/football.jpeg"
import eagles from "../images/img.jpeg"

export default function Saved(props) {
    return (
        <div>                
            <h1 id="saved-heading"> SAVED ARTICLES</h1>
            <div id="saved">
                <div id="saved-articles">
                    <SavedArticle
                        cover={eagles} 
                        heading="EAGLES WIN SUPER BOWL LVIII"
                        subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                        author="Will Smith"
                        date="February 11, 2024"
                        image={cover}
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
                    <SavedArticle
                        cover={eagles} 
                        heading="EAGLES WIN SUPER BOWL LVIII"
                        subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                        author="Will Smith"
                        date="February 11, 2024"
                        image={cover}
                        credits="Photo by Corey Perrine"
                        body="Philadelphia Eagles fans went wild after their team made history Sunday night with 
                        its second Super Bowl victory. /n Eagles fans celebrated the historic win by pouring into 
                        the streets to cheer, cry, set off fireworks, scale street poles, and break hotel awnings. 
                        By Monday morning, plants and street signs were uprooted and cars were flipped over as 
                        fans celebrated a win."
                    />
                    <SavedArticle
                        cover={eagles} 
                        heading="EAGLES WIN SUPER BOWL LVIII"
                        subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                        author="Will Smith"
                        date="February 11, 2024"
                        image={cover}
                        credits="Photo by Corey Perrine"
                        body="Philadelphia Eagles fans went wild after their team made history Sunday night with 
                        its second Super Bowl victory. /n Eagles fans celebrated the historic win by pouring into 
                        the streets to cheer, cry, set off fireworks, scale street poles, and break hotel awnings. 
                        By Monday morning, plants and street signs were uprooted and cars were flipped over as 
                        fans celebrated a win."
                    />
                    <SavedArticle
                        cover={eagles} 
                        heading="EAGLES WIN SUPER BOWL LVIII"
                        subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                        author="Will Smith"
                        date="February 11, 2024"
                        image={cover}
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