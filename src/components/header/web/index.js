import React from 'react'
import './web.css'

function Web() {
    return (
        <React.Fragment>

        <div className = "web">
            <div className = "web-options">
                <a href = "#projects">
                <i class="fi-rr-browser option-icon"></i>Projects
                </a>
            </div>

            <div className = "web-options">
                 <a href = "#skills">
                 <i class="fi-rr-diploma option-icon"></i>Skills
                </a>
            </div>

            <div className = "web-options">
                <a href= "#education">
                <i class="fi-rr-graduation-cap option-icon"></i>Education
                </a>
            </div>

            <div className = "web-options">
                <a href = "#contact">
                <i class="fi-rr-user option-icon"></i>Contact
                </a>
            </div>

   
        </div>

        </React.Fragment>
    )
}

export default Web
