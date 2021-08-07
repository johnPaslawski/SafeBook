import FacebookSide from "../Sidebars/FacebookSide";
import "./../Content.css";
import NewsElem from "./Components/NewsElem";
import useGetApi from "../../../Api/useGetApi";

const News = (props) => {

    const {data: newsDataFetch, isPending: isPendingNews, error: newsError} = useGetApi(`/api/News?like=${props.like}`);
    const {data: projectsDataFetch, isPadding: isPaddingProjects, error: projectsError} = useGetApi(`/api/Projects?like=${props.like}`);

    const combinedData = (newsDataFetch && projectsDataFetch) && newsDataFetch.concat(projectsDataFetch);

    return(
        <div className="content-side">
            <div className="news title-content-grid">
                <div className="news-title title-content-title">
                    Aktualności
                </div>
                <div className="news-list title-content-content">
                    { combinedData && combinedData.map(news => 
                        <NewsElem newsData={news} key={combinedData.indexOf(news)}/>
                    )}
                </div>
            </div>
            <FacebookSide />
        </div>
    );
}

export default News;