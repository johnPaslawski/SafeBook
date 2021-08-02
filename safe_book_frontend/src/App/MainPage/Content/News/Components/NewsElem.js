import "./../../Content.css";
import { Link } from "react-router-dom";

const NewsElem = () => {
    return(
        <div className="news-elem" style={{backgroundImage: `url(/mp.jpg)`}}>
            <div className="news-elem-content">
                <div className="news-elem-title">Muzyczna podróż</div>
                <div className="news-elem-descr">Lorem Ipsum is simply dummy text of the printing and typenting and typesetting inLorem Ipsum is simply dummy text of the printing and typesettsetting inLorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                <div className="news-elem-show">
                    <Link to="*" className="news-elem-show-btn">Rozwiń</Link>
                </div>
            </div>
        </div>
    );
}

export default NewsElem;