const SET_MAIN_PAGE_NEWS = "SET_MAIN_PAGE_NEWS";
const SET_MAIN_PAGE_CUR_NEWS = "SET_MAIN_PAGE_CUR_NEWS";
const SET_LAST_NEWS_INDEX = "SET_LAST_NEWS_INDEX";
const NEWS_TYPE = "Nowość";//Need to add type of news in DB then delete this one

let initializeState = {
    news : [],
    curNews: [],
    lastNewsIndex: 0
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
        default:
            return state;
    }
}

export default mainPageNewsReducer;

export const setMainPageNewsActionCreator = (body) => ({type: SET_MAIN_PAGE_NEWS, body: body});
export const setMainPageCurNewsActionCreator = (body) => ({type: SET_MAIN_PAGE_CUR_NEWS, body: body});
export const setLastNewsIndexActionCreator = (body) => ({type: SET_LAST_NEWS_INDEX, body: body});

export const addNewsType = (body) => {
    body.map( n => n.type = NEWS_TYPE);
    return body;
};//Need to add type of news in DB then delete this one