import React from "react"
import { Link } from "gatsby"
import constant from "../config/constant"
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

  window.onclick = () => {
    let navHeight = document.getElementById("navbar").clientHeight
    console.log("navHeight in onLoad", navHeight)
    document.getElementById("services").style.paddingTop = `${navHeight}px`
    document.getElementById("joinNow").style.paddingTop = `${navHeight}px`
    document.getElementById("price").style.paddingTop = `${navHeight}px`
    document.getElementById("team").style.paddingTop = `${navHeight}px`
  }

  return (
    <nav id="navbar">
      <div className="content">
        <div id="inner-nav">
          <div id="fitness-logo-wrapper">
            <img
              src={images.fitnesslogo}
              alt="fitness logo"
              id="fitness-logo"
            />
          </div>
          <ul id="header-list">
            {constant.headerListItem.map(({ to, title }, i) => (
              <ListItem to={to} title={title} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

const ListItem = ({ to, title }) => {
  return (
    <Link to={to} id="header-listItem">
      {title}
    </Link>
  )
}
