import React from "react"

export default function ServiceCard(props) {
  const { src, cardTitle, cardText } = props
  return (
    <div className="col-sm">
      <div id="team-card">
        <div id="team-image-wrapper">
          <img id="team-image" src={src} alt="a lady with dumble in hand" />
        </div>
        <p className="card-title">{cardTitle}</p>
        <p className="">{cardText}</p>
        <button type="button" className="btn btn-secondary">
          Learn more
        </button>
      </div>
    </div>
  )
}
