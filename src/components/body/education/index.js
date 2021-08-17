import React from 'react';
import './education.css';
import Seperator from '../../common/separator/index';

function Education() {

    return  <div className = "education">
                <Seperator />
                <div className = "section-header">

                <span className = "section-icon">
                      <i class="fas fa-user-graduate"></i>
                </span>    
               <span className = "section-title">Education</span>
               </div>

                <div className = "education-container" >

                          <div className = "education-box">
                           <div className = "education-title">Btech [IT] </div>          
                                 <div className = "education-date">2019-23</div> 

                           <div className = "education-desc">
                               Currently, I am in 4th Semester of my Bachelor's degree in<span className = "text-highlight"> Information Technology</span> and till now my YGPA is <span className = "text-highlight">9.01 </span>.
                           </div>
                          
                        </div>
                    

                        <div className = "education-box">
                           <div className = "education-title">Intermediate </div>           
                                 <div className = "education-date">2018-19</div>
                        
                                   

                           <div className = "education-desc">
                               I scored <span className = "text-highlight">86%</span> marks from BSEB and acheieved <span className = "text-highlight">2nd position</span> in college and 5th position in district.
                           </div>

                        </div>
                       
                        <div className = "education-box">
                          <div className = "education-title"> Matriculation </div>          
                             <div className = "education-date">2016-17</div>

                          <div className = "education-desc">
                                I scored <span className = "text-highlight">85%</span> marks from BSEB and acheieved <span className = "text-highlight">1st position</span> in college and 3rd position in district.
                          </div>

                       </div>
                       <div className = "education-divider"> 
                              <div className = "education-traveller">
                                    <i class = "fas fa-plane"></i>
                              </div>
                       </div> 
                </div>
                        

        </div>

}

export default Education;
