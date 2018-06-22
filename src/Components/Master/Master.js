import React, {Component} from 'react';

//import all other components for return to App.js based on React state / user navigation
// import TestContent from "../TestContent";
import Landing from "./Landing";
import FeaturedDrinks from "../Drinks/FeaturedDrinks";
import Location from "../Location";
import People from "../People/People";
// import BrunchMenu from "../Menu/BrunchMenu";

export default class Master extends Component{

    render(){


       if(this.props.page==="landing"){
           console.log(this.props.page);
           return(
               <Landing/>
           );
       }
       if(this.props.page==="drinks"){
           console.log(this.props.page);
           return(
               <FeaturedDrinks/>
           );
       }
       if(this.props.page==="locate"){
           return(
               <Location/>
           );
       }
        if(this.props.page==="people"){
           return(
               <People/>
           )
        }

       else{
           console.log(this.props.page);
           return(
               <h1>Error: React State set to unrecognized value</h1>
           )
       }
    }
}