import React, {Component} from 'react';
import resume from './resume-1.jpg'

export default class Resume extends Component{
    render(){
        return(
            <div className=" main-content resume">

                <div className="section-title">
                    <h2>Resume</h2>
                </div>

                <div className="divider">
                </div>

                <img src={resume} className="resume-img" alt="Resume"/>
            </div>
        );
    }
}