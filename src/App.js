import './App.css';
import Home from "./components/Home";
import Log from "./components/Log";
import Registration from "./components/Registration";
import About from "./components/About";
import Organisation from "./components/Organisation";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Logout from "./components/Logout";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll'



export default function App() {
    return (

        <Router>
            <Log/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/logowanie">
                    <Login/>
                </Route>
                <Route exact path="/rejestracja">
                    <Registration/>
                </Route>
                <Route exact path="/wylogowano">
                    <Logout/>
                </Route>

            </Switch>





        </Router>

    );
}


