import React from 'react';
import './contact.css';
import Seperator from "../../common/separator/index";
import SocialContact from "../../common/social-contact/index";

function Contact() {
    return (
        <div className = "contact">
            <Seperator />
            <div className = "section-header">

                <span className = "section-icon">
                    <i class="far fa-address-card"></i>
                </span>    
               <span className = "section-title">Contact</span>
               </div>

            <div className = "contact-container">
                <div className = "contact-left">
                    <p>Want to get in touch ? Contact me in any of the platform </p>
                    <SocialContact />
                </div>

                <div className = "download">
                    <a download href = {require("../../../assets/resume.pdf").default}>
                        <i class = "fi-rr-cloud-download download-icon" />
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;
