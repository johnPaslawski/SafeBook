import "./../../Content.css";
import { Link } from "react-router-dom";

const NewsElem = (props) => {
    return(
        <div className="news-elem" style={{backgroundImage: `url(/${props.newsData.imageName})`}}>
            <div className="news-elem-content">
                <h2 className="news-elem-title">{props.newsData.title}</h2>
                <div className="news-elem-descr">{props.newsData.description}</div>
                <div className="news-elem-show">
                    <Link to="/news/1" className="news-elem-show-btn">Rozwiń</Link>
                </div>
            </div>
        </div>
    );
}

export default NewsElem;