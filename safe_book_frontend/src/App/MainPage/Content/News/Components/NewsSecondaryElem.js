import news from "./../News.module.css";
import { Link } from "react-router-dom";

const NewsSecondaryElem = (props) => {
    return(
        <div className={`${news.newsSecondaryElem}`}>
            <div className={`${news.newsSecondaryPhoto}`}>
                <Link to="">
                    <img alt="" src={process.env.PUBLIC_URL + "/" + props.news.imageName}></img>
                </Link>
            </div>
            <div className={`${news.newsSecondaryContent}`}>
                <div className={`${news.newsSecondaryType}`}>{props.news.type}</div>
                <div className={`${news.newsSecondaryInf}`}>
                    <div className={`${news.newsSecondaryTitle}`}>
                        <Link to="">{props.news.title}</Link> 
                    </div>
                    <div className={`${news.newsSecondaryDescription}`}>{props.news.description}</div>
                </div>
                <div className={`${news.newsSecondaryTypeAdditional}`}>
                    <div className={`${news.newsSecondaryDate}`}>{props.news.creationDate.split("T")[0]}</div>
                    <div className={`${news.newsSecondaryShow}`}>
                        <Link to="">Szczegóły</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsSecondaryElem;