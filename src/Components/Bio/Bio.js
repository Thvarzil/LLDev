import React, {Component} from 'react';

export default class Bio extends Component{
    render(){
        return(
            <div className="main-content bio">
                <div className="section-title">
                    <h2>About</h2>
                </div>

                <div className="divider">
                </div>

                <div className="frosted">
                    <p>Here's a little bio about me! I'm super cool and good at this!</p>
                </div>
            </div>
        );
    }
}