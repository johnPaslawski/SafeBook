import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://localhost:44325/api/"
});

export const newsApi = {
    getAllNews(like, setNewsType, setProjectsType=undefined){ // setProjectsType only if you want to combine news with projects
        return instance(`News?like=${like}`)
        .then( response => {
            let newsWithType = setNewsType(response.data);

            if(setProjectsType){
                return projectsApi.getAllProjects(like, setProjectsType, newsWithType);
            }
            else{
                return newsWithType;
            }
        })
    }
}

export const projectsApi = {
    getAllProjects(like, setProjectsType=undefined, newsData=undefined){// setProjectsType use only if you want to add type of projects, newsData only if combine with news
        return instance(`Projects?like=${like}`)
        .then( response => {
            if(newsData){ //if we want to combine two arrays
                let projectsWithType = setProjectsType(response.data);
                return newsData.concat(projectsWithType);
            }
            else{ //normal way
                return response.data;
            }
        })
    }
}