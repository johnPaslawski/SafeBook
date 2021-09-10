import news from "./../News.module.css";
import grid from "./../../../css/GridSystem.module.css";
import { Link } from "react-router-dom";

const NewsMainElem = (props) => {
    return(
        <div className={`${grid.grid} ${news.newsMainElem}`}>
            <div className={`${news.newsMainPhoto}`}>
                <img alt="" src={process.env.PUBLIC_URL + "/" + props.news.imageName}></img>
            </div>
            <div className={`${news.newsMainBottom}`}>
                <div className={`${news.newsMainContent}`}>
                    <div className={`${news.newsMainTitle}`}>
                        <Link to={`/main/element/${props.news.type}/${props.news.id}`}>{props.news.title}</Link>
                    </div>
                    <div className={`${news.newsMainDescription}`}>
                        {props.news.description}
                    </div>
                </div>
                <div className={`${news.newsMainAdditional} ${grid.grid} ${grid.colThree}`}>
                    <div className={`${news.date}`}>{props.news.creationDate.split("T")[0]}</div>
                    <div className={`${news.newsMainType}`}>{props.news.type}</div>
                    <div className={`${news.showMore}`}>
                        <Link to={`/main/element/${props.news.type}/${props.news.id}`}>Szczegóły</Link>
                    </div>
                </div>
            </div>
            {/* <div className={`${news.newsMainType}`}>{props.news.type}</div> */}
        </div>
    );
}

export default NewsMainElem;