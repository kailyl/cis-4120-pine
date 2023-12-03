import "../style/Homepage.css"
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Card from "./homepage_carousel/Card";
import Carousel from "./homepage_carousel/Carousel";
import NavBar from "./NavBar";

import card1 from "../images/football.jpeg"
import card1b from "../images/img.jpeg"
import card2 from "../images/taylor-swift.webp"
import card3 from "../images/kanye-west2.webp"
import card3b from "../images/kanye-west.webp"
import card4 from "../images/lily-depp.png"
import card5 from "../images/pitbull.jpeg"


export default function Homepage() {
    const [saved, setSaved] = useState(false);

    const handleSave = (bookmarked) => {
        setSaved(bookmarked)
    }

    let cards = [
        {
            key: uuidv4(),
            content: (
            <Card 
                setSaved={handleSave}
                background={card1} 
                cover={card1b}
                heading="EAGLES WIN SUPER BOWL LVIII"
                subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                author="Will Smith"
                date="February 11, 2024"
                image={card1b}
                credits="Photo by Corey Perrine"
                body="Philadelphia Eagles fans went wild after their team made history Sunday night with 
                its second Super Bowl victory. /n Eagles fans celebrated the historic win by pouring into 
                the streets to cheer, cry, set off fireworks, scale street poles, and break hotel awnings. 
                By Monday morning, plants and street signs were uprooted and cars were flipped over as 
                fans celebrated a win. /n Philadelphia Eagles fans went wild after their team made history Sunday night with 
                its second Super Bowl victory. /n Eagles fans celebrated the historic win by pouring into 
                the streets to cheer, cry, set off fireworks, scale street poles, and break hotel awnings. 
                By Monday morning, plants and street signs were uprooted and cars were flipped over as 
                fans celebrated a win."/>
            )
        },
        {
          key: uuidv4(),
          content: (
            <Card 
                setSaved={handleSave}
                background={card2} 
                cover={card2}
                heading="How Does Football Work?"
                subheading="America's favorite sport, according to singer-songwriter and pop superstar Taylor Swift."
                author="Kory Grow"
                date="February 9, 2024"
                image={card2}
                credits="Photo by Mat Hayward"
                body="Taylor Swift's nearly cult-like following is nothing if not committed, even if it means 
                tackling a world potentially foreign to some fans. /n Following the 'Mastermind' singer's surprise 
                appearance cheering for the Kansas City Chiefs against the Chicago Bears this season, Swifties 
                are learning all they need to know about rumored love interest Travis Kelce and the sport of football.
                /n One Swiftie uploaded a post that broke the game into the simplest possible terms. Many of the 
                replies were from confused Swifties asking questions about the sport. “Okay, so what’s a down?” 
                one person asked. Users asked questions like, “What’s a field goal” and “Do you throw the ball or 
                run with it?”"/>
            )
        },
        {
          key: uuidv4(),
          content: (
            <Card 
                setSaved={handleSave}
                background={card1} 
                cover={card1}
                heading="What Does Kanye 2024 Look Like?"
                subheading="A glimpse of the American rapper and singer-songwriter's campaign trail."
                  author="Kim Kardashian"
                date="February 8, 2024"
                image={card1}
                credits="Photo by Winston Cook"
                body="Kanye West is hitting the campaign trail. /n Exactly two weeks after announcing his unlikely 
                bid for president, the rapper announced late Saturday he will be holding the first event of his 
                campaign in South Carolina on Sunday at 5 p.m. /n The event will be held at the Exquis Event Center 
                in North Charleston, according to a statement. It is 'for registered guests only.' /n Those who wish 
                to attend will need to sign up at West's new campaign site, kanye2024.country — though the site 
                doesn't appear to have a specific link to sign up for the event yet."/>
            )
        },
        {
          key: uuidv4(),
          content: (
            <Card 
                setSaved={handleSave}
                background={card1} 
                cover={card1}
                heading="How “Nepo Babies” are pushing back"
                subheading="Actress Lily Rose Depp on her experiences growing up in the public eye."
                  author="Anna Wintour"
                date="February 6, 2024"
                image={card1}
                credits="Photo by Dimitrios Kambouris"
                body="Lily-Rose Depp grew up in the public eye, but she's still somewhat uncomfortable with the 
                concept of fame. /n The 23-year-old is the daughter of Johnny Depp and Vanessa Paradis, and she's 
                following in her parents' footsteps with an acting career of her own. But she's not exactly keen 
                on the idea of stardom. /n In a new interview with Elle, Depp acknowledges that learning how to be 
                famous as an adult has been “a weird thing to navigate.” /n “It’s different experiencing it firsthand 
                rather than by proxy. I guess it’s something that I’ve had to make my own way with,” she said."
                />
            )
        },
        {
          key: uuidv4(),
          content: (
            <Card 
                setSaved={handleSave}
                background={card1} 
                cover={card1}
                heading="A Conversation With Pitbull"
                subheading="“Now make dollars, I mean billions. I’m a genius, I mean brilliant.”"
                author="Benito Antonio Martínez Ocasio"
                date="February 5, 2024"
                image={card1}
                credits="Photo by Scott Legato"
                body="Pitbull has recorded hundreds of songs and has sold more than 70 million singles, with 
                No. 1 hits in more than 15 countries. /n He’s had more than 67 million digital downloads, more 
                than nine billion YouTube views, and has over 22 million Twitter followers and 59 million 
                followers on Facebook. He’s performed in over 50 countries for millions of people.
                /n Pitbull—born Armando Christian Perez 35 years ago—is the latest in a long list of Latino stars 
                who have made invaluable contributions to American popular music."/>
            )
        }
    ];
    
    return (
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
        
    );
}