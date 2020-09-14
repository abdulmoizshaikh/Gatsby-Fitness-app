import React from "react"
import CarouselComp from "../components/carousel"

export default function JoinNow() {
  return (
    <div id="joinNow">
      <div className="content">
        <p id="team-title">FREE TRAINING SESSION</p>
        <p id="team-subtitle">
          <span>
            <strong>SIGN UP </strong>
          </span>
          NOW
        </p>
        <div className="container">
          <div className="row">
            {/* <div id="join-now-inner-container"> */}
            {/* signup form  */}
            {/* <div className="signup-form w-50"> */}
            <div className="col-sm">
              <div className="form">
                <div className="input-wrapper">
                  <input className="input" placeholder="First Name" />
                </div>
                <div className="input-wrapper">
                  <input className="input" placeholder="Valid Email Id" />
                </div>
                <div className="input-wrapper">
                  <textarea className="textarea" placeholder="Message" />
                </div>
                <div className="signup-btn-wrapper">
                  <button
                    type="button"
                    className="btn btn-secondary signup-btn"
                  >
                    Start Now
                  </button>
                </div>
              </div>
            </div>

            {/* carousel component */}
            {/* <div className="w-50"> */}
            <div className="col-sm">
              <CarouselComp height="400px" />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
