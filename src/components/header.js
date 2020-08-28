import React from 'react'
import "../styles/styles.css";
import fitnessLogo from '../../assets/fitnesslogo.png';
import { Link } from "gatsby";
import constants from "../config/constants";

export default function Header() {
    return (
        <div id="headerContainer">
            <div id="headerContent">
                <div id="fitnessLogoWrapper">
                    <img src={fitnessLogo} alt="fitness logo" id="fitnessLogo" />
                </div>
                <ul id="headerList">
                    {constants.headerListItem.map(({ to, title }) => <ListItem to={to} title={title} />)}
                </ul>
            </div>
        </div>
    )
}


const ListItem = ({ to, title }) => (
    <Link to={to} id="headerListItem">
        {title}
    </Link>
)