import "./../Content.css";
import NewsElem from "./Components/NewsElem";
import useGetApi from "../../../Api/useGetApi";

const News = (props) => {

    const {data: newsDataFetch, isPending: isPendingNews} = useGetApi(`/api/News?like=${props.like}`);
    const {data: projectsDataFetch, isPadding: isPaddingProjects} = useGetApi(`/api/Projects?like${props.like}`);

    const renderData = (data, type) => (
        data.map( element => 
            <NewsElem type={type} newsData={element} key={element.id} />
        )
    )

    return(
        <div className="news_page">
            <div className="news title-content-grid main-content">
                <div className="news-title">
                    <h1 className="news-title-content">Aktualności</h1>
                </div>
                <div className="news-list title-content-content">
                    {(isPendingNews || isPaddingProjects)  && <div>Loading...</div>}
                    {newsDataFetch && renderData(newsDataFetch, "news")}
                    {projectsDataFetch && renderData(projectsDataFetch, "projects")}
                </div>
            </div>
        </div>
    );
}

export default News;