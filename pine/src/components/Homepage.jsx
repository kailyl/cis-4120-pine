import "../style/Homepage.css"

import background from "../images/football.jpeg"

export default function Homepage() {
    return (
        <div id="background" style={{ 
            backgroundImage: `url(${background})`
        }}>
            <h1 id="heading"> EAGLES WIN SUPER BOWL LVIII</h1>
            <h3 id="subheading"> From greasy fingers to greasier poles, here’s how Philadelphia celebrated the historic victory. </h3>
        </div>
    )
}