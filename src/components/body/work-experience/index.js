import React from 'react';
import './work-experience.css';
import Seperator from '../../common/separator/index';
import { WorkData } from '../../data/work';
import WorkCard from './work-card';

function WorkExperience() {
    const data = WorkData;
    return (
        <div className = "work-experinece">
            <Seperator />
            <label className = "section-title">Work</label>

            <div className = "work-list">
                {
                    data.map((item) => {
                        return < WorkCard item = {item} />
                        
                    })
                }
            </div>

        </div>
    )
}

export default WorkExperience;
