import React from 'react';
import './skills.css';
import Seperator from "../../common/separator/index";
import { SkillsData} from "../../data/skills";
import SkillCard from './skill-card';

function Skills() {
    const data =  SkillsData;

    return (

        <div className = "skills">
            <Seperator />
            <div className = "section-header">
            <span className = "section-icon">
                <i class="fas fa-chalkboard-teacher"></i>
            </span>    
           <span className = "section-title">Skills</span>
           </div>
           
            <div className = "section-container">
                {data.map((item) => {
                    return (
                        <div className = "skills-section">
                            <label className = "skills-section-title">{item.type}</label>
                            <div className = "skills-list">
                                {item.list.map((skill) => {
                                    return (
                                        <SkillCard skill = {skill} />
                                    )
                                })

                                }
                            </div>
                        </div>
                    )
                })}  
            </div>
        </div>
    );
}

export default Skills;
