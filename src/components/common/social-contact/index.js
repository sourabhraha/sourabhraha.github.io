import React from 'react';
import { SocialData } from '../../data/social';
import './social-contact.css';

function SocialContact() {

    const data = SocialData;

    return <div className = "social-contact">
        {data.map((item) => {
            return (
                <a href = {item.link}>
                    <div className = "social-icon-div">
                        <img src = {item.icon} className = "social-icon" />
                    </div>
                </a>
            )
        })}
        <a href = "mailto: abc@example.com" className = "social-icon-div">
            <img className = "social-icon" src = {require("../../../assets/social-icons/mail.png").default}/>
        </a>
    </div>
    
}

export default SocialContact;
