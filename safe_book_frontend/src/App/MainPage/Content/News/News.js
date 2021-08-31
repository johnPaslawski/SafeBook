import "./../Content.css";
import NewsElem from "./Components/NewsElem";
import React from "react";
import * as axios from "axios";

class News extends React.Component{

    renderNews = (data, type) => (
        data.map( element => 
            <NewsElem type={type} newsData={element} key={element.id} />
        )
    )

    componentDidMount(){
        axios.get(`https://localhost:44325/api/News?like=${this.props.like}`)
        .then( response => { this.props.onFetchNews(response.data)});
    }

    render(){
        return(
            <div className="news_page">
                <div className="news title-content-grid main-content">
                    <div className="news-title">
                        <h1 className="news-title-content">Aktualności</h1>
                    </div>
                    <div className="news-list title-content-content">
                        {this.props.news.length > 0 ? this.renderNews(this.props.news, "news") : <div>Loading...</div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default News;