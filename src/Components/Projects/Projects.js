import React, {Component} from 'react';
// Underscore allows for iteration through project list to 
// render the same bit of HTML over and over with different content.
import _ from 'underscore';
// Imports project array from projectList.js
import projects from './projectList';

export default class Projects extends Component{
    
    // Component function that produces the project info panels. 
    renderProjects(){
        // _.map is the underscore function used to loop-render HTML with different content
        return _.map(projects, (list) =>{
            return(
                <div className="frosted content-panel" key={list.key}>
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

                {/* Runs renderProjects function, in order to render each individual project panel */}
                {this.renderProjects()}
            </div>
        );
    }
}