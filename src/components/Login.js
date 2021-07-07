import React, {useState, useEffect} from "react";
import Nav from "./Nav";

export default function Login() {


    return (
        <>
            <Nav/>
            <form>
                <h3 className="login_title">Zaloguj się</h3>
                <div className="head_icon"></div>
                <div className="login_main">
                    <div className="login_main_inputs">
                        <label >Email</label>
                        <input
                            style={{marginLeft: "5px"}}
                            id="email"
                            type="text"
                        />
                    </div>
                    <div className="login_main_inputs">
                        <label> Hasło</label>
                        <input
                            style={{marginLeft: "5px"}}
                            id="password"
                            type="password"
                        />
                    </div>

                </div>

                <div className="login_btn">
                    <button className="login_btn_left" type="submit">Załóż konto</button>
                    <button className="login_btn_right" type="submit">Zaloguj!</button>
                </div>

            </form>
        </>


    );
}

