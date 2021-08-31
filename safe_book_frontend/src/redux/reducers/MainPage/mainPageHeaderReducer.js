const UPPDATE_MAIN_PAGE_HEADER_SEARCH_BODY = "UPPDATE_MAIN_PAGE_HEADER_SEARCH_BODY";

let initialState = {
    newSearchBody : ""
}

const mainPageHeaderReducer = (state = initialState, action) => {
    switch(action.type){
        case UPPDATE_MAIN_PAGE_HEADER_SEARCH_BODY:
            return{
                ...state,
                newSearchBody: action.body
            }
        default:
            return state;
    }
}

export const newMainPageHeaderSearchBodyActionCreator = (body) => ({
    type: UPPDATE_MAIN_PAGE_HEADER_SEARCH_BODY,
    body: body
});
export default mainPageHeaderReducer;