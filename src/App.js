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
                    <nav className={"nav-wrapper"}>
                        <div className={"nav-contents"}>
                            {/*logo redirects to landing*/}
                            <button id={'landing'} onClick={this.navigateToLanding}><img src={logo} className="App-logo" alt="logo" /></button>
                            <ul className="right hide-on -med-and-down">
                                <li><h6>louisblebohec@gmail.com</h6></li>
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

