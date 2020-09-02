import React from 'react'

export default function TeamCard(props) {
    const { src } = props;
    return (
        <div id="team-card">
            <div id='team-image-wrapper'>
                <img id="team-image" src={src} alt="a lady with dumble in hand" />
            </div>
            <p className="text-center">Philips</p>
            <p className="text-center">master chefs</p>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
            <div>
                {/* <a href="/#"> */}
                    {/* <i class="facebook-f"></i> */}
                    <i class="fab fa-facebook"></i>
                {/* </a> */}
                <a href="/#">
                    <i class="fa fa-twitter clr-primary"></i>
                </a>
                <a href="/#">
                    <i class="fa fa-google-plus clr-primary"></i>
                </a>
                <a href="/#">
                    <i class="fa fa-linkedin clr-primary"></i>
                </a>
            </div>
        </div>
    )
}
