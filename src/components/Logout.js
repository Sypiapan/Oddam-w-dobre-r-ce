import React, {useState, useEffect} from "react";
import Nav from "./Nav";

export default function Logout() {


    return (
        <>
            <Nav/>
            <form className="loginOut">
                <h3 className="login_title_out">Wylogowanie nastapiło pomyślnie</h3>
                <div className="head_icon"></div>
                <div className="login_btn_out">
                    <button className="login_btn_left" type="submit">Strona główna</button>

                </div>

            </form>
        </>


    );
}
