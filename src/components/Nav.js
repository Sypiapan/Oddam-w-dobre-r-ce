import React from "react";
import {
    Link
} from "react-scroll";


export default function Nav() {
    return (

            <nav>
                <ul className="nav_links">
                    <li>
                        <Link to="login_nav">Start</Link>
                    </li>
                    <li>
                        <Link to="article-header">O co chodzi?</Link>
                    </li>
                    <li>
                        <Link to="about_content">O nas</Link>
                    </li>
                    <li>
                        <Link to="page_second_buttons_item">Fundacja i organizacje</Link>
                    </li>
                    <li>
                        <Link to="contact">Kontakt</Link>
                    </li>
                </ul>
            </nav>


    );
}