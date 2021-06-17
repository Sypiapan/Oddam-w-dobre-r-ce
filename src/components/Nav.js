import React from "react";
import {
    Link
} from "react-scroll";


export default function Nav() {
    return (

            <nav>
                <ul className="nav_links">
                    <li>
                        <Link to="start">Start</Link>
                    </li>
                    <li>
                        <Link to="what">O co chodzi?</Link>
                    </li>
                    <li>
                        <Link to="about">O nas</Link>
                    </li>
                    <li>
                        <Link to="organisation">Fundacja i organizacje</Link>
                    </li>
                    <li>
                        <Link to="contact">Kontakt</Link>
                    </li>
                </ul>
            </nav>


    );
}