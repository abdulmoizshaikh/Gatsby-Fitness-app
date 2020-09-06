import React from "react"
import ServiceCard from "../components/serviceCard"
import * as images from "../../assets/images"

export default function Services() {
  return (
    <div id="services">
      <div
        className="content"
        // style={{ paddingTop: document.getElementById("navbar").clientHeight }}
      >
        <div>
          <p id="team-title">GOODNESS FORM OUR RUPIZA</p>
          <p id="team-subtitle">
            <span>
              <strong>OUR </strong>
            </span>
            SERVICES
          </p>
        </div>
        <div className="team-card-wrapper">
          <ServiceCard
            src={images.services3}
            cardTitle="YOGA CLASSES"
            cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
          />
          <ServiceCard
            src={images.services1}
            cardTitle="POWER LIFTING"
            cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
          />
          <ServiceCard
            src={images.services2}
            cardTitle="SHAPING"
            cardText="Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod "
          />
        </div>
      </div>
    </div>
  )
}
