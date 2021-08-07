import FacebookSide from "../Sidebars/FacebookSide";
import "./../Content.css";
import NewsElem from "./Components/NewsElem";
import useGetApi from "../../../Api/useGetApi";

const News = (props) => {

    const {data, isPending, error} = useGetApi(`/api/News`);

    return(
        <div className="content-side">
            <div className="news title-content-grid">
                <div className="news-title title-content-title">
                    Aktualności
                </div>
                <div className="news-list title-content-content">
                    { data && data.map(news => 
                        <NewsElem newsData={news}/>
                    )}
                </div>
            </div>
            <FacebookSide />
        </div>
    );
}

export default News;