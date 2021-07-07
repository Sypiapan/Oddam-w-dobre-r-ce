import {
    Link
} from "react-router-dom";


import Logo from "../assets/Icon-1.svg";
import Logo2 from "../assets/Icon-2.svg";
import Logo3 from "../assets/Icon-3.svg";
import Logo4 from "../assets/Icon-4.svg";


export default function HomeFourSteps() {
    return (
        <main className="page_second-content">
            <h2 className="article-header">Wystarczą 4 proste kroki</h2>
            <div className="head_icon"></div>
            <div className="container">

                <article className="article">
                    <a href="" className="article-photo">
                        <img src={Logo} alt="" className="article-photo-img"/>
                    </a>
                    <h3 className="article-title">Wybierz rzeczy</h3>

                    <p className="article-text">
                        ubrania, zabawki, sprzet i inne
                    </p>
                </article>
                <article className="article">
                    <a href="" className="article-photo">
                        <img src={Logo2} alt="" className="article-photo-img"/>
                    </a>

                    <h3 className="article-title">Spakuj je</h3>
                    <p className="article-text">
                        skorzystaj z worków na śmieci
                    </p>
                </article>
                <article className="article">
                    <a href="" className="article-photo">
                        <img src={Logo3} alt="" className="article-photo-img"/>
                    </a>

                    <h3 className="article-title">Zdecyduj komu chcesz pomóc</h3>
                    <p className="article-text">
                        wybierz zaufane miejsce
                    </p>
                </article>
                <article className="article">
                    <a href="" className="article-photo">
                        <img src={Logo4} alt="" className="article-photo-img"/>
                    </a>

                    <h3 className="article-title">Zamow kuriera</h3>
                    <p className="article-text">
                        kurier przyjedzie w dogodnym terminie
                    </p>
                </article>



            </div>
            <div className="head_menu btn4steps">

                <div className="link">
                    <Link to="/logowanie">ODDAJ RZECZY</Link>
                </div>


            </div>
        </main>
    );
}