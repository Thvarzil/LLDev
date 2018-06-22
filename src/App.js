import React, {Component} from 'react';
import './App.css';
import logo from "./myLogo.png";
import Footer from "./Components/Footer";
import Master from "./Components/Master/Master";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "landing"
        };

    }


    //Navigation/redirect functions
    navigateToLanding = (event) => {
        event.preventDefault();
        console.log(event.target.id);
        this.setState({page: "landing"});
        console.log(this.state.page);
    };

    navigateToDrinks = (event) => {
        event.preventDefault();
        console.log(event.target.id);
        this.setState({page: "drinks"});
        console.log(this.state.page);
    };

    navigateToPeople = (event) => {
        event.preventDefault();
        console.log(event.target.id);
        this.setState({page: "people"});
        console.log(this.state.page);
    };

    navigateToLocation = (event) => {
        event.preventDefault();
        console.log(event.target.id);
        this.setState({page: "locate"});
        console.log(this.state.page);
    };

    render() {
        return (
            <div className="App">
                {/*<Header navigator={this.navigate}/>*/}
                <header className="App-header">
                    {/*Dropdown Structure*/}
                    <ul id="dropdown1" className="dropdown-content">
                        <li><a href={""}><h5>Our Brunch</h5></a></li>
                        <li className={"divider"}> </li>
                        {/*<li><a href={"http://www.cottonwood.triodining.com/lunch"}>Trio Lunch</a></li>*/}
                        <li><a href={"http://www.cottonwood.triodining.com/dinner"}>Trio Dinner</a></li>
                        <li><a href={"http://www.cottonwood.triodining.com/dessert"}>Trio Desserts</a></li>
                    </ul>
                    <nav className={"nav-wrapper"}>
                        <div className={"nav-contents"}>
                            {/*logo redirects to landing*/}
                            <button id={'landing'} onClick={this.navigateToLanding}><img src={logo} className="App-logo" alt="logo" /></button>
                            <ul className="right hide-on -med-and-down">
                                {/*Link to People page*/}
                                <li><button onClick={this.navigateToPeople}><h5>The People</h5></button></li>
                                {/*Link to Drinks page*/}
                                <li><button onClick={this.navigateToDrinks}><h5>The Drinks</h5></button></li>
                                {/*Dropdown Trigger*/}
                                <li><button className="dropdown-button" data-activates="dropdown1"><h5>The Food</h5></button></li>
                                <li><span><h5>||</h5></span></li>
                                {/*Link to Locaiton page1q*/}
                                <li><button onClick={this.navigateToLocation} ><h5>Find Us</h5></button></li>

                            </ul>
                        </div>

                    </nav>
                </header>
                <Master page={this.state.page}/>
                <Footer/>
            </div>

        );
    }
}

