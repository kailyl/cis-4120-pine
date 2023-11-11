import "../style/Saved.css"

import NavBar from "./NavBar";
import SavedArticle from "./SavedArticle";

import cover from "../images/football.jpeg"

export default function Saved() {
    return (
        <div>                
            <h1 id="saved-heading"> SAVED ARTICLES</h1>
            <div id="saved">
                <div id="saved-articles">
                    <SavedArticle
                        headline="EAGLES WIN SUPER BOWL LVIII"
                        subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                        author="Will Smith"
                        date="February 11, 2024"
                        image={cover}
                    />
                    <SavedArticle
                        headline="EAGLES WIN SUPER BOWL LVIII"
                        subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                        author="Will Smith"
                        date="February 11, 2024"
                        image={cover}
                    />
                    <SavedArticle
                        headline="EAGLES WIN SUPER BOWL LVIII"
                        subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                        author="Will Smith"
                        date="February 11, 2024"
                        image={cover}
                    />
                    <SavedArticle
                        headline="EAGLES WIN SUPER BOWL LVIII"
                        subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                        author="Will Smith"
                        date="February 11, 2024"
                        image={cover}
                    />
                </div>
            </div>
            <div id="nav-bar">
                <NavBar/> 
            </div>
        </div>
    )
}