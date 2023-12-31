import "../style/NavBar.css";

import { useEffect, useState } from "react";

import home from "../images/navbar-buttons/icon-inv.jpg";
import search from "../images/navbar-buttons/search.png";
import profile from "../images/navbar-buttons/person.png";
import bookmark from "../images/navbar-buttons/bookmark.png";

export default function NavBar(props) {
    const [savedBounce, setSavedBounce] = useState(false)

    useEffect(() => {
        if (props && props.savedArticle) {
            setSavedBounce(true);

            const timeoutId = setTimeout(() => {
                setSavedBounce(false)
            }, 1000)

            return () => clearTimeout(timeoutId)
        }
    }, [props])

    const navigateTo = (path) => {
        window.location.href = path;
    };

    return (
        <div id="navbar">
            <button
                className="navButton"
                style={{
                    backgroundImage: `url(${home})`, 
                    backgroundSize: "cover",
                    width: '18px', 
                    height: '15px', 
                    border: 'none', 
                    cursor: 'pointer',}}
                onClick={() => navigateTo("/")}>
                    &nbsp;
            </button>
            <button
                className="navButton"
                style={{
                    backgroundImage: `url(${search})`, 
                    backgroundColor: "black",
                    backgroundSize: "cover",
                    width: '18px', 
                    height: '15px', 
                    border: 'none', 
                    cursor: 'pointer',}}
                onClick={() => navigateTo("/trending")}>
                    &nbsp;
            </button>
            <button
                className={savedBounce ? "bouncingButton" : "navButton"}
                style={{
                    backgroundImage: `url(${bookmark})`, 
                    backgroundColor: "black",
                    backgroundSize: "cover",
                    width: '18px', 
                    height: '17px', 
                    border: 'none', 
                    cursor: 'pointer',}}
                onClick={() => navigateTo("/saved")}>
                    &nbsp;
            </button>
            <button
                className="navButton4"
                style={{
                    backgroundImage: `url(${profile})`, 
                    backgroundColor: "black",
                    backgroundSize: "cover",
                    width: '19px', 
                    height: '23px', 
                    border: 'none', 
                    cursor: 'pointer',}}
                onClick={() => navigateTo("/profile")}>
                    &nbsp;
            </button>
        </div>
    );
}
