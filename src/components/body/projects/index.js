import React from 'react';
import Separator from '../../common/separator';
import { ProjectData } from '../../data/projects';
import ProjectCard from './project-card';
import './projects.css';

function Projects() {
    const data = ProjectData;
    return (
    <React.Fragment>
    <div className = "projects">
             <Separator/>

        <div className = "section-header">
         <span className = "section-icon">
            <i class="fi-rr-edit-alt"></i>
         </span>    
        <span className = "section-title">Projects</span>
        </div>
        <div className = "projects-container">
            {data.map((project) => {
                return <ProjectCard 
                           project = {project} 
                       />;

            })}
        </div>    
        
    </div>
    </React.Fragment>
    );
}

export default Projects;
