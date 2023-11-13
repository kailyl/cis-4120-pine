import "../style/Profile.css"

import NavBar from "./NavBar";
import Dropdown from "./Dropdown";
import TagList from './TagList';

import cover from "../images/football.jpeg"

export default function Profile() {
    return (
        <div id="profile">
            <div id = "profile-div">
                <h1 id="profile-heading"> PROFILE</h1>

                <div id="profile-image">
                    <img id="image" src={cover} height="80%" width="85%" style={{borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}></img>
                </div>

                <p id="profile-name">{"Peter Jones"}</p>
                <p id="profile-email">{"mr.worldwide@gmail.com"}</p>

                <h2 id="profile-subheading"> Your Interests</h2>
                <div className="profile-search-bar">
                    <input type="text" placeholder="Search..." />
                </div>

                <TagList/>

                <p></p>
                <h2 id="profile-subheading"> Restricted Sources</h2>

                <Dropdown/>
            </div>

            <div id="nav-bar">
                <NavBar/> 
            </div>
        </div>
    )
}