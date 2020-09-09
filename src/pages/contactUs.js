import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ContactUs() {
  return (
    <div id="contactUs">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <p className="contactus-title">Socialize .</p>
              <div id="icon-container">
                <div className="icon-div" id="facebook">
                  <FontAwesomeIcon
                    size="lg"
                    color="#ffffff"
                    icon={["fab", "facebook-f"]}
                  />
                </div>
                <div className="icon-div" id="twitter">
                  <FontAwesomeIcon
                    size="lg"
                    color="#ffffff"
                    icon={["fab", "twitter"]}
                  />
                </div>
                <div className="icon-div" id="google-plus">
                  <FontAwesomeIcon
                    size="lg"
                    color="#ffffff"
                    icon={["fab", "google-plus-square"]}
                  />
                </div>
                <div className="icon-div" id="linkedin">
                  <FontAwesomeIcon
                    size="lg"
                    color="#ffffff"
                    icon={["fab", "linkedin-in"]}
                  />
                </div>
                <div className="icon-div" id="youtube">
                  <FontAwesomeIcon
                    size="lg"
                    color="#ffffff"
                    icon={["fab", "youtube"]}
                  />
                </div>
                <div className="icon-div" id="instagram">
                  <FontAwesomeIcon
                    size="lg"
                    color="#ffffff"
                    icon={["fab", "instagram-square"]}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm">
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
