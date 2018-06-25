import React, {Component} from 'react';
import _ from 'underscore';

export default class Projects extends Component{
    
    renderProjects(){
        var projects = [
            {
                title: "Title1",
                description: "Here is a brief description of the project.",
                repo: "http://www.github.com",
                live: null
            },
            {
                title: "Title2",
                description: "Here is a brief description of the project.",
                repo: "http://www.github.com",
                live: "http://www.heroku.com"
            },
            {
                title: "Title3",
                description: "Here is a brief description of the project.",
                repo: "http://www.github.com",
                live: null
            },
            {
                title: "Title4",
                description: "Here is a brief description of the project.",
                repo: "http://www.github.com",
                live: "http://www.heroku.com"
            },
        ];

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