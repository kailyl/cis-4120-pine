import "../style/Homepage.css"
import React, { useState, useEffect } from "react";
import jsonData from '../data/10-articles.json';
import { v4 as uuidv4 } from "uuid";

import Card from "./homepage_carousel/Card";
import Carousel from "./homepage_carousel/Carousel";
import NavBar from "./NavBar";

export default function Homepage() {
    const [saved, setSaved] = useState(false);
    const [jsonDataState, setJsonDataState] = useState(null);
    const [cards, setCards] = useState([]);

    const handleSave = (bookmarked) => {
        setSaved(bookmarked)
    }

    useEffect(() => {
        // localStorage.clear()
        setJsonDataState(jsonData);
    }, []);
    
    useEffect(() => {
        if (jsonDataState) {
            const firstTenArticles = jsonDataState.slice(0, 10);
            const newCards = firstTenArticles.map((article) => {
                return {
                    key: uuidv4(),
                    content: (
                        <Card
                            setSaved={handleSave}
                            background={article.background}
                            heading={article.heading}
                            subheading={article.subheading}
                            author={article.author}
                            date={article.date}
                            image={article.image}
                            credits={article.credits}
                            body={article.body}
                        />
                    )
                }
            })

            setCards(newCards);
        }
    }, [jsonDataState])
    
    return (
        cards.length > 0 ? 
            <div>
                <p id="user"> Good morning, Peter! </p>
                <p id="news"> Your daily news updates are ready. </p>
                <div id="cards">
                    <Carousel
                        cards={cards}
                        height="370px"
                        width="30%"
                        margin="0 auto"
                        offset={2}
                        showArrows={false}
                    />
                </div>
                <NavBar savedArticle={saved} /> 
            </div>
        : 
            <div></div>
    );
}