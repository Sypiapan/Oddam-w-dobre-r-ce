import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeFourSteps from "./HomeFourSteps";

export default function About() {
    return (
        <>
            <div className="container flex">
                <div className="about_content">
                    <p className="about_title">O nas</p>
                    <div className="head_icon"></div>
                    <p className="about_text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>

                    <div className="about_signature"></div>
                </div>
                <div className="about_picture"></div>


            </div>

        </>
    );
}