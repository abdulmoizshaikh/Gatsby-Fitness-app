import React from "react"

export default function Price() {
  return (
    <div id="price">
      <div className="content">
        <p id="team-title">OUR BEST OFFERS</p>
        <p id="team-subtitle">
          <span>
            <strong>PRICE &amp; </strong>
          </span>
          PLANS
        </p>
        <div class="container">
          <div class="row">
            <PricePlanCard title="STARTER" amount="$ 0" />
            <PricePlanCard title="PREMIUM" amount="$ 59" />
            <PricePlanCard title="ULTIMATE" amount="$ 99" />
          </div>
        </div>
      </div>
    </div>
  )
}

const PricePlanCard = props => {
  return (
    <div class="col-sm">
      <div className="price-box">
        <p className="plan-name">{props.title}</p>
        <p className="plan-amount">{props.amount}</p>
        <p>BILLED MONTHLY</p>
        <hr />
        <p>Free 14 dat trial</p>
        <p>Unlimited Pages.</p>
        <p>Unlimited Storages.</p>
        <hr />
        <button type="button" className="btn btn-secondary ordernow-btn">
          Order Now
        </button>
      </div>
    </div>
  )
}
