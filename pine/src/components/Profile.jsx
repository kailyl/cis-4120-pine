import "../style/Profile.css"

import NavBar from "./NavBar";
import Dropdown from "./Dropdown";
import TagList from './TagList';

export default function Profile() {
    return (
        <div id="profile">
            <div id = "profile-div">
                <h1 id="profile-heading"> YOUR PROFILE</h1>

                <p id="profile-name">{"Peter Jones"}</p>
                <p id="profile-email">{"mr.worldwide@gmail.com"}</p>

                <h2 id="profile-subheading"> Interests</h2>
                <div className="profile-search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
                <TagList/>
                <h2 id="profile-subheading"> Restricted Sources</h2>
                <div id="restricted">
                    <Dropdown/>
                    <button id="add"> ADD </button>
                </div>
            </div>

            <div id="nav-bar">
                <NavBar/> 
            </div>
        </div>
    )
}