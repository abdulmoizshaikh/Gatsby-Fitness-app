import React from 'react'
import TeamCard from "../components/teamCard";
import * as images from "../../assets/images";

export default function Team() {
    return (
        <div id="team">
            <p id="team-title">Our Best Trainers</p>
            <p id="team-subtitle">
                <span>
                    <strong>Meet </strong>
                </span>
             Out Team
            </p>
            <div className="team-card-wrapper">
                <TeamCard src={images.team1} />
                <TeamCard src={images.team2} />
                <TeamCard src={images.team3} />
            </div>
        </div>
    )
}
