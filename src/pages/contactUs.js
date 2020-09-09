import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ContactUs() {
  return (
    <div id="contactUs">
      <div className="content">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <p className="contactus-title">Socialize .</p>
              <div id="icon-container">
                <a href="/#" className="icon-wrapper b-10">
                  <FontAwesomeIcon
                    color="#ffffff"
                    icon={["fab", "facebook-f"]}
                  />
                </a>
                <a href="/#" className="icon-wrapper b-10">
                  <FontAwesomeIcon color="#ffffff" icon={["fab", "twitter"]} />
                </a>
                <a href="/#" className="icon-wrapper b-10">
                  <FontAwesomeIcon
                    color="#ffffff"
                    icon={["fab", "google-plus-square"]}
                  />
                </a>
                <a href="/#" className="icon-wrapper b-10">
                  <FontAwesomeIcon
                    color="#ffffff"
                    icon={["fab", "linkedin-in"]}
                  />
                </a>
                <a href="/#" className="icon-wrapper b-10">
                  <FontAwesomeIcon color="#ffffff" icon={["fab", "youtube"]} />
                </a>
                <a href="/#" className="icon-wrapper b-10">
                  <FontAwesomeIcon
                    color="#ffffff"
                    icon={["fab", "instagram-square"]}
                  />
                </a>
              </div>
            </div>
            <div class="col-sm">
              <p className="contactus-title">Hire us .</p>
              <p className="contactus-title">
                lets start a new project together
              </p>
              <p className="contactus-title">example@rupiza.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
