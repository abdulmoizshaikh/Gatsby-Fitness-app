import React from "react"
import { Link } from "gatsby"
import constant from "../config/constant"
import * as images from "../../assets/images"

export default function Header() {
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
