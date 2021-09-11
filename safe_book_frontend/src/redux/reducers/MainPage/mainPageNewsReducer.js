const SET_MAIN_PAGE_NEWS = "SET_MAIN_PAGE_NEWS";
const SET_MAIN_PAGE_CUR_NEWS = "SET_MAIN_PAGE_CUR_NEWS";
const SET_LAST_NEWS_INDEX = "SET_LAST_NEWS_INDEX";
const NEWS_TYPE = "News";//Need to add type of news in DB then delete this one
const SET_LOADING = "SET_LOADING";

let initializeState = {
    news : [],
    curNews: [],
    lastNewsIndex: 0,
    loading: false
};

const mainPageNewsReducer = (state = initializeState, action) => {
    switch (action.type) {
        case SET_MAIN_PAGE_NEWS:
            return {
                ...state,
                news: action.body,
                curNews: action.body.slice(0, 4),
                lastNewsIndex: action.body.slice(0, 4).length - 1
            };
        case SET_MAIN_PAGE_CUR_NEWS:
            return{
                ...state,
                curNews: action.body
            }
        case SET_LAST_NEWS_INDEX:
            return{
                ...state,
                lastNewsIndex: action.body
            }
        case SET_LOADING:
            return{
                ...state,
                loading: action.body
            }
        default:
            return state;
    }
}

export default mainPageNewsReducer;

export const setNews = (body) => ({type: SET_MAIN_PAGE_NEWS, body: body});
export const setCurNews = (body) => ({type: SET_MAIN_PAGE_CUR_NEWS, body: body});
export const setLastNewsIndex = (body) => ({type: SET_LAST_NEWS_INDEX, body: body});
export const setLoading = (body) => ({type: SET_LOADING, body: body});

export const addNewsType = (body) => {
    body.map( n => n.type = NEWS_TYPE);
    return body;
};//Need to add type of news in DB then delete this one