import React from 'react';
import './mobile.css';

function Mobile({isOpen, setIsOpen}) {

    return (
        <React.Fragment>

        <div className = "mobile">
           <div className = "close-icon" onClick = {() => setIsOpen(!isOpen)}>
                <i class="fi-rr-cross-circle"></i>
           </div>

     <div className = "mobile-options" >

           <div className = "mobile-option" onClick = {() => setIsOpen(!isOpen)}>
           <a href = "#projects">
           <i class="fi-rr-browser option-icon"></i>Projects
           </a>
       </div>

       <div className = "mobile-option" onClick = {() => setIsOpen(!isOpen)}>
            <a href = "#skills">
            <i class="fi-rr-diploma option-icon"></i>Skills
           </a>
       </div>

       <div className = "mobile-option" onClick = {() => setIsOpen(!isOpen)}>
           <a href= "#education">
           <i class="fi-rr-graduation-cap option-icon"></i>Education
           </a>
       </div>

       <div className = "mobile-option" onClick = {() => setIsOpen(!isOpen)}>
           <a href = "#contact">
           <i class="fi-rr-user option-icon"></i>Contact
           </a>
       </div>


           </div>
        </div>

        </React.Fragment>
    )
}

export default Mobile
