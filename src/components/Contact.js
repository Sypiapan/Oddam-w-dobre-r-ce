

export default function Contact() {
    return (

        <>
            <div className="contact">


                <div className="contact_content">
                    <p className="contact_title">Skontaktuj się z nami</p>
                    <div className="head_icon"></div>

                </div>
                <div className="form__field">
                    <label className="form__label" htmlFor="name">Name</label>
                    <input type="text" className="form__input name" id="name"/>
                </div>
                <div className="form__field">
                    <label className="form__label" htmlFor="email">E-mail</label>
                    <input type="email" className="form__input email" id="email"/>
                </div>
                <div className="form__field">
                    <label className="form__label" htmlFor="email">E-mail</label>
                    <textarea  className="form__input text" id="text"/>
                </div>
                <button>Wyslij</button>


            </div>

        </>
    );
}