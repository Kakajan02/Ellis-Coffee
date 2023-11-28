import RightImage from "../../assets/images/welcome-top.png";
import Content from "./Content";
import Contact from "./Contact";
import css from "./css.module.css";

function Welcome() {
    return (
        <div className={css["w-wrapper"]}>
            <div className={css["banner-image-left"]}>
                <img src={RightImage} alt="Banner" />
            </div>
            <Content />
            <Contact />
        </div>
    );
}

export default Welcome;
