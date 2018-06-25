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

                <div className="frosted content-panel">
                    <p>Hello! My name is Lou, I am a developer from Salt Lake City, Utah, with a passion 
                        for software, data, and the inner working of just about anything. I specialize in 
                        JavaScript primarily, but I am diving into Python and data analysis at the moment, 
                        in an attempt to broaden my horizons, increase my skills, and be the best developer I can be.
                    </p>
                </div>
            </div>
        );
    }
}