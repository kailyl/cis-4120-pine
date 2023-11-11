import "../style/Homepage.css"
import { v4 as uuidv4 } from "uuid";
import Card from "./homepage_carousel/Card";
import Carousel from "./homepage_carousel/Carousel";
import NavBar from "./NavBar";

import background from "../images/football.jpeg"
import eagles from "../images/img.jpeg"

export default function Homepage() {
    let cards = [
        {
            key: uuidv4(),
            content: (
            <Card 
                background={background} 
                cover={eagles}
                heading="EAGLES WIN SUPER BOWL LVIII"
                subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                author="Will Smith"
                date="February 11, 2024"
                image={eagles}
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
                background={background} 
                cover={eagles}
                heading="EAGLES WIN SUPER BOWL LVIII 2"
                subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                author="Will Smith"
                date="February 11, 2024"
                image={eagles}
                credits="Photo by Corey Perrine"
                body="Philadelphia Eagles fans went wild after their team made history Sunday night with 
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
                background={background}
                cover={eagles} 
                heading="EAGLES WIN SUPER BOWL LVIII 3"
                subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                author="Will Smith"
                date="February 11, 2024"
                image={eagles}
                credits="Photo by Corey Perrine"
                body="Philadelphia Eagles fans went wild after their team made history Sunday night with 
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
                background={background}
                cover={eagles}
                heading="EAGLES WIN SUPER BOWL LVIII 4"
                subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                author="Will Smith"
                date="February 11, 2024"
                image={eagles}
                credits="Photo by Corey Perrine"
                body="Philadelphia Eagles fans went wild after their team made history Sunday night with 
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
                background={background} 
                cover={eagles}
                heading="EAGLES WIN SUPER BOWL LVIII 5"
                subheading="From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory."
                author="Will Smith"
                date="February 11, 2024"
                image={eagles}
                credits="Photo by Corey Perrine"
                body="Philadelphia Eagles fans went wild after their team made history Sunday night with 
                its second Super Bowl victory. /n Eagles fans celebrated the historic win by pouring into 
                the streets to cheer, cry, set off fireworks, scale street poles, and break hotel awnings. 
                By Monday morning, plants and street signs were uprooted and cars were flipped over as 
                fans celebrated a win."/>
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
                    height="400px"
                    width="30%"
                    margin="0 auto"
                    offset={2}
                    showArrows={false}
                />
            </div>
            <NavBar/> 
        </div>
        
    );
}