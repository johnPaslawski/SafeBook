import { Link } from "react-router-dom";
import FacebookSide from "../Sidebars/FacebookSide";
import "./../Content.css";
import NewsElem from "./Components/NewsElem";

const News = () => {
    return(
        <div className="content-side">
            <div className="news title-content-grid">
                <div className="news-title title-content-title">
                    Aktualności
                </div>
                <div className="news-list title-content-content">
                    <NewsElem />
                    <NewsElem />
                    <NewsElem />
                    <NewsElem />
                    <NewsElem />
                    <NewsElem />
                    <NewsElem />
                    <NewsElem />
                    <NewsElem />
                    <NewsElem />
                </div>
            </div>
            <FacebookSide />
        </div>
    );
}

export default News;