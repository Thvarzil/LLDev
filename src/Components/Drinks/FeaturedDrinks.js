import React, {Component} from 'react';
import menu1 from './page1crop.jpg';
import menu2 from './page2crop.jpg';
import menu3 from './page3crop.jpg';
import menu4 from './page4crop.jpg';
import menu5 from './page5crop.jpg';
import menu6 from './page6crop.jpg';




export default class FeaturedDrinks extends Component{
    render(){
        return(
            <div className={"menu-box"}>
                <img src={menu1} className={"menu-page"} alt={"beers"}></img>
                <img src={menu2} className={"menu-page"} alt={"wine"}></img>
                <img src={menu3} className={"menu-page"} alt={"martini1"}></img>
                <img src={menu4} className={"menu-page"} alt={"martini2"}></img>
                <img src={menu5} className={"menu-page"} alt={"cocktails"}></img>
                <img src={menu6} className={"menu-page"} alt={"spirits"}></img>

            </div>
        )
    }
}