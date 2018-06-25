import React, {Component} from 'react';
import _ from 'underscore';
import projects from './projectList';

export default class Projects extends Component{
    
    renderProjects(){
        return _.map(projects, (list) =>{
            return(
                <div className="frosted main-content">
                    <h5>{list.title}</h5>
                    <p>{list.description}</p>
                    <h6><a href={list.live}>Live</a> || <a href={list.repo}>Repo</a></h6>
                </div>
            )
        })
        
    }
    render(){
        return(
            <div className="main-content">
                <div className="section-title">
                    <h2>Projects</h2>
                </div>

                <div className="divider">
                </div>

                {this.renderProjects()}
            </div>
        );
    }
}