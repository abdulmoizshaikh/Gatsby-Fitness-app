import React, { useState } from "react"
import { Link } from "gatsby"
import constant from "../config/constant"
import * as images from "../../assets/images"
import Hamburger from "hamburger-react"

export default function Header() {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav id="navbar">
      <div id="header-content">
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
              <ListItem
                to={to}
                title={title}
                key={i}
                className="header-listItem"
              />
            ))}
          </ul>
        </div>
      </div>

      {/* hamburger  */}
      <div id="hamburger-wrapper">
        <Hamburger
          color="#fff"
          toggled={isOpen}
          toggle={setOpen}
          onToggle={() => {
            if (!isOpen) {
              document.getElementById("header-list").style.display = "block"
              document.getElementById("header-list").style.height = "210px"
            } else {
              document.getElementById("header-list").style.height = "0px"
            }
          }}
        />
      </div>
    </nav>
  )
}

const ListItem = ({ to, title, className }) => {
  return (
    <Link to={to}>
      <div className={className}>{title}</div>
    </Link>
  )
}
