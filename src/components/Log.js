import React from "react";
import {
    Link
} from "react-router-dom";

export default function Log() {
    return (
            <nav className="login">
                <ul className="login_nav">
                    <li>
                        <Link to="/logowanie">Zaloguj</Link>
                    </li>
                    <li>
                        <Link to="/rejestracja">Załóż konto</Link>
                    </li>
                </ul>
            </nav>

    );
}

