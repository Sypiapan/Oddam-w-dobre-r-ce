
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";
import { Link, animateScroll as scroll } from "react-scroll";



export default function Home() {
    return (
        <>
            <div className="container flex">
            <div className="head_picture"></div>
            <div className="head_content">
                <HomeHeader/>

                    <div className="head_title">
                        <p>Zacznij pomagać!</p>
                        <p>Oddaj niepotrzebne rzeczy w zaufane ręce</p>
                        <div className="head_icon"></div>

                    </div>
                    <div className="head_menu">
                        <h3 >ODDAJ RZECZY</h3>
                        <h3>ZORGANIZUJ ZBIÓRKĘ</h3>
                    </div>


                </div>

            </div>
            <HomeThreeColumns/>
            <HomeFourSteps/>
        </>
    );
}
