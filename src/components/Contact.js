import React, {useState} from "react";

export default function Contact() {


    const Api = "https://fer-api.coderslab.pl/v1/portfolio/contact";


    const [inputMsg, setInputMsg] = useState({

        name: "",
        email: "",
        text: "",

    });

    const [errorList, setErrorList] = useState([]);
    const [isFormValid, setIsFormValid] = useState(false);


    const handleValueChange = (e) => {
        const {name, value} = e.target;
        setInputMsg({
            ...inputMsg,
            [name]: value,
        });
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newErrorList = [];
        if (inputMsg.name.length < 3) {
            newErrorList.push(
                "Podane imie jest nieprawidłowe!"
            );
        }
        if (inputMsg.email.length < 3 || inputMsg.email.indexOf("@") === -1) {
            newErrorList.push(
                "Podany email jest nieprawidłowy!"
            );
        }
        if (inputMsg.text.length < 20) {
            newErrorList.push(
                "Wiadomość musi mieć co najmniej 120 znaków!"
            );
        }


        if (newErrorList.length > 0) {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
        }
        setErrorList(newErrorList);


        const dataToSend = {
            name: inputMsg.name,
            email: inputMsg.email,
            text: inputMsg.text,

        };
        fetch(`${Api}`, {
            method: "POST",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Błąd sieci!");
                }
            })
            .then((data) => {

                setInputMsg({
                    name: "",
                    email: "",
                    text: "",
                });
            })
            .catch((err) => console.log("Błąd!", err));
    }
    return (
        <>
            <div className="contact">


                <div className="contact_content"></div>

                <div className="contact_form">
                    <p className="contact_title">Skontaktuj się z nami</p>
                    <div className="head_icon_contact"></div>

                    <form onSubmit={handleFormSubmit}>

                        <div className="form__input_id">
                            <div className="form__input">
                                <label className="form__label" htmlFor="name">Wpisz swoje imię</label>
                                <input name="name" value={inputMsg.name} type="text" className="form__input name"
                                       id="name"
                                       onChange={handleValueChange}/>
                            </div>
                            <div className="form__input">
                                <label className="form__label" htmlFor="email">Wpisz swój e-mail</label>
                                <input name="email" value={inputMsg.email} type="email" className="form__input email"
                                       id="email"
                                       onChange={handleValueChange}/>
                            </div>

                        </div>


                        <div className="form__text">
                            <label className="form__label" htmlFor="email">Wpisz swoja wiadomość</label>
                            <textarea value={inputMsg.text}
                                      type="text"
                                      name="text"
                                      rows="4"
                                      className="form__input text"
                                      id="text"
                                      onChange={handleValueChange}/>
                        </div>
                        <button type="submit" className="form_btn">Wyślij</button>
                    </form>


                </div>


            </div>

        </>

    );

}






