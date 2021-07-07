import Nav from "./Nav";

export default function Registration() {
    return (

        <>
            <Nav/>
            <form>
                <h3 className="login_title">Zarejestruj się</h3>
                <div className="head_icon"></div>
                <div className="login_main_registration">

                    <div className="login_main_inputs">
                        <label>Email</label>
                        <input
                            style={{marginLeft: "5px"}}
                            id="username"
                            type="text"
                        />
                    </div>
                    <div className="login_main_inputs">
                        <label>Hasło</label>
                        <input
                            style={{marginLeft: "5px"}}
                            id="password"
                            type="password"
                        />
                    </div>
                    <div className="login_main_inputs">
                        <label>Powtórz hasło</label>
                        <input
                            style={{marginLeft: "5px"}}
                            id="password"
                            type="password"
                        />
                    </div>
                </div>

                <div className="login_btn_registration">
                    <button className="login_btn_left" type="submit">Zaloguj!</button>
                    <button className="login_btn_right" type="submit">Załóż konto!</button>
                </div>

            </form>

        </>


    );
}