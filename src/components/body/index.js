import React from 'react';
import './body.css';
import About from './about/index';
import Projects from './projects/index';
import Skills from './skills/index';
import Education from './education';
import Contact from './contact/index';


function Body() {
    return (
        <React.Fragment>
        <div className = "body">

            <section id = "about">
                <About />
            </section>

            <section id = "projects">
                 <Projects />
            </section>

            <section id = "skills">
                 <Skills />
            </section>

            <section id = "education">
                <Education />
            </section>

            <section id = "contact">
                <Contact />
            </section>





        </div>
        </React.Fragment>
    )
}

export default Body;
