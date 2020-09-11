import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function TeamCard(props) {
  const { src } = props
  return (
    <div className="col-sm">
      <div id="team-card">
        <div id="team-image-wrapper">
          <img id="team-image" src={src} alt="a lady with dumble in hand" />
        </div>
        <p className="text-center img-title">Philips</p>
        <p className="text-center">master chefs</p>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </p>

        <div id="socail-logos-wrapper">
          <a href="/#" className="icon-wrapper">
            <FontAwesomeIcon color="#000" icon={["fab", "facebook-f"]} />
          </a>
          <a href="/#" className="icon-wrapper">
            <FontAwesomeIcon color="#000" icon={["fab", "twitter"]} />
          </a>
          <a href="/#" className="icon-wrapper">
            <FontAwesomeIcon
              color="#000"
              icon={["fab", "google-plus-square"]}
            />
          </a>
          <a href="/#" className="icon-wrapper">
            <FontAwesomeIcon color="#000" icon={["fab", "linkedin-in"]} />
          </a>
        </div>
      </div>
    </div>
  )
}
