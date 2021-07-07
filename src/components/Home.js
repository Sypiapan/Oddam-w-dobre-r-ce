import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
//import {Link, animateScroll as scroll} from "react-scroll";
import About from "./About";
import Organisation from "./Organisation";
import Contact from "./Contact";


import {Switch} from "react-router-dom";
import React from "react";
import {
    Link
} from "react-router-dom";


export default function Home() {
    return (
        <>
            <div className="container flex">
                <div className="head_picture"></div>
                <div className="head_content">
                    <HomeHeader/>

                    <div className="head_title">
                        <p>Zacznij pomagać!</p>
                        <p>Oddaj niepotrzebne rzeczy w zaufane ręce</p>
                        <div className="head_icon"></div>

                    </div>
                    <div className="head_menu">


                        <div className="link">
                            <Link to="/logowanie">ODDAJ RZECZY</Link>
                        </div>
                        <div className="link">
                            <Link to="/logowanie">ZORGANIZUJ ZBIÓRKĘ</Link>
                        </div>
                    </div>


                </div>

            </div>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <About/>
            <Organisation/>
            <Contact/>

        </>
    );
}
