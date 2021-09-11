import news from "./News.module.css";
import NewsMainElem from "./Components/NewsMainElem";
import NewsSecondaryElem from "./Components/NewsSecondaryElem";
import grid from "./../../css/GridSystem.module.css";

const News = (props) => {

    const upClick = () => {
        let newCurNews = props.allNews.slice(props.lastIndex - 4, props.lastIndex);
        props.setCurNews(newCurNews);
        props.setLastNewsIndex(props.lastIndex - 1);
    }

    const downClick = () => {
        let newCurNews = props.allNews.slice(props.lastIndex - 2, props.lastIndex + 2)
        props.setCurNews(newCurNews);
        props.setLastNewsIndex(props.lastIndex + 1);
    }

    const renderNews = () => {
        return(
            <div className={`${news.newsContainer} ${grid.grid} ${grid.colTwo}`}>
                <div className={`${news.newsMain}`}>
                    <NewsMainElem news={props.curNews[0]}/>
                </div>
                <div className={`${news.newsSecondary}`}>
                    <div className={`${news.newsSecondaryScrollTop}`}>
                        {props.lastIndex > 3
                        && <img alt="" src={process.env.PUBLIC_URL + '/Arrow-Top.png'} onClick={upClick}/>}
                    </div>
                    <div className={`${news.newsSecondaryElements}`}>
                        {props.curNews.slice(1).map( n => <NewsSecondaryElem news={n} key={`${n.type}${n.id}`}/>)}
                    </div>
                    <div className={`${news.newsSecondaryScrollBottom}`}>
                    {props.lastIndex < props.allNews.length - 1
                        && <img alt="" src={process.env.PUBLIC_URL + '/Arrow-Down.png'} onClick={downClick}/>}
                    </div>
                </div>
            </div>
        );
    }

    return(
        props.loading ? <div>Loading...</div> : 
        props.curNews.length > 0 ? renderNews() : <div>Niema danych :)</div>
    );
}

export default News;