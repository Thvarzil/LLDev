import React, {Component} from 'react';


export default class Location extends Component {
    render() {
        return (

            <div className={"frosted main-content"}>
                <div className={"row"}>
                    <div className={"col s3"}>
                        <h4>Address</h4>
                        <p>6405 S 3000 E <br/> Holladay, UT <br/> 84121</p>
                        <h4>Contact</h4>
                        <p>Phone: (801)943-1696 <br/> Email: elixirloungeutah@gmail.com</p>
                    </div>
                    <div className={"col s6"}>
                        <iframe id={"map-frame"}
                                title={"map"}
                                width="600"
                                height="450"
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDh910CLOzjnQnbIgNZcjyRzy-LXAUosH0
    &q=Elixir+Lounge,Salt+Lake+City,Utah">
                        </iframe>
                    </div>
                </div>
            </div>

        )
    }
}