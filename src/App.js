import React, {Component} from 'react';
import './App.css';
import logo from "./myLogo.png";
import Footer from "./Components/Footer";
// import Master from "./Components/Master/Master";
import Resume from "./Components/Resume/Resume";
import Bio from "./Components/Bio/Bio";
import Projects from "./Components/Projects/Projects";


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
                            {/*logo opens dropdown navigator*/}
                            <img src={logo} className="App-logo" alt="logo" />
                            
                            <ul className="right hide-on -med-and-down">
                                <li><h6>(971)303-6117 || louisblebohec@gmail.com</h6></li>
                            </ul>
                        </div>

                    </nav>
                </header>
                {/* <Master page={this.state.page}/> */}
                <Bio />
                <Resume/>
                <Projects/>
                <Footer/>

            </div>

        );
    }
}

