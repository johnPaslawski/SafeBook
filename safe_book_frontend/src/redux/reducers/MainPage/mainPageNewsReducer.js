const SET_MAIN_PAGE_NEWS = "SET_MAIN_PAGE_NEWS";

let initializeState = {
    mainPageNews : []
};

const mainPageNewsReducer = (state = initializeState, action) => {
    switch (action.type) {
        case SET_MAIN_PAGE_NEWS:
            return {
                ...state,
                mainPageNews: action.body
            };
        default:
            return state;
    }
}

export default mainPageNewsReducer;

export const setMainPageNewsActionCreator = (body) => ({type: SET_MAIN_PAGE_NEWS, body: body});