import FacebookSide from "../Sidebars/FacebookSide";
import "./../Content.css";
import NewsElem from "./Components/NewsElem";
import { useGet as useGetApi } from "../../../Api/Api";
import config from "../../../../config.json"


const News = (prop) => {
    
    if(prop.like !== ""){
        var url = config.API_URL + '/News?like=' + prop.like;
    }else{
        var url = config.API_URL + '/News';
    };
    
    console.log('oto szukany string like:'+ prop.like);
    const {data, isPending, error} = useGetApi(url);

    return(
        <div className="content-side">
            <div className="news title-content-grid">
                <div className="news-title title-content-title">
                    Aktualności
                </div>
                { isPending && <div>Loading . . . </div> }
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