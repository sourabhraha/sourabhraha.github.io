import React from 'react';
import SocialContact from '../../common/social-contact';
import './about.css';
/*

    require is used to load files in react and default is just a extra parameter for webpack 


*/
function About() {

    return (
        <React.Fragment>

        <div className = "about">
        {console.log("testing")}
            <div className = "about-top">

                <div className = "about-info">
                    Hello There 👋, I am 
                    <br/> <span className = "info-name " onClick = {()=> {
                        window.location.href = "https://www.linkedin.com/in/sourabh-raha-29b0a81a6/";
                    }} >Sourabh!</span>
                    <br/> 🎓 I’m a Full Stack Developer (MERN), Competitive Coder and a junior pursuing my Bachelors in Information Technology.
                    👨‍💻 I am passionate about Problem Solving, Machine Learning & I enjoy learning new things.
                </div>

                <div className = "about-photo">
                    <img 
                        src = {require('../../../assets/my-pic.jpg').default} 
                        alt = "my-pic" 
                        className = "my-pic"/> 
    
                </div>
            </div>

           <SocialContact />
        </div>

        </React.Fragment>
    )
}

export default About;
