import './App.css';
import Home from "./components/Home";
import Log from "./components/Log";



import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll'
import Registration from "./components/Registration";
import Loggin from "./components/Loggin";
import Start from "./components/Start";
import What from "./components/What";
import About from "./components/About";
import Organisation from "./components/Organisation";
import Contact from "./components/Contact";

export default function App() {
    return (

        <Router>
            <Log/>
                        <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact  path="/loggin">
                    <Loggin/>
                </Route>
                <Route exact path="/registration">
                    <Registration/>
                </Route>

            </Switch>

            <Start/>
            <What/>
            <About/>
            <Organisation/>
            <Contact/>

        </Router>

    );
}


