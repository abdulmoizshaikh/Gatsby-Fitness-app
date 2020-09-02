import React from "react"
import { Link } from "gatsby"
import constants from "../config/constants"
import * as images from "../../assets/images"

export default function Header() {
  var prevScrollpos = window.pageYOffset
  window.onscroll = () => {
    var currentScrollPos = window.pageYOffset
    if (currentScrollPos === prevScrollpos) {
      document.getElementById("navbar").style.backgroundColor = "transparent"
    } else {
      document.getElementById("navbar").style.backgroundColor =
        "rgba(51, 51, 51, 0.8)"
    }
  }
  return (
    <nav id="navbar">
      <div className="content">
        <div id="fitness-logo-wrapper">
          <img src={images.fitnesslogo} alt="fitness logo" id="fitness-logo" />
        </div>
        <ul id="header-list">
          {constants.headerListItem.map(({ to, title }) => (
            <ListItem to={to} title={title} />
          ))}
        </ul>
      </div>
    </nav>
  )
}

const ListItem = ({ to, title }) => (
  <Link to={to} id="header-listItem">
    {title}
  </Link>
)
