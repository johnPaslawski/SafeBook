const UPPDATE_MAIN_PAGE_HEADER_SEARCH_BODY = "UPPDATE_MAIN_PAGE_HEADER_SEARCH_BODY";
const SET_NEW_SEARCH = "SET_NEW_SEARCH";

let initialState = {
    newSearchBody : "",
    newSearch: false
}

const mainPageHeaderReducer = (state = initialState, action) => {
    switch(action.type){
        case UPPDATE_MAIN_PAGE_HEADER_SEARCH_BODY:
            return{
                ...state,
                newSearchBody: action.body
            }
        case SET_NEW_SEARCH:
            return{
                ...state,
                newSearch: action.body
            }
        default:
            return state;
    }
}

//Actions
export const setSearchBody = (body) => ({
    type: UPPDATE_MAIN_PAGE_HEADER_SEARCH_BODY,
    body: body
});
export const setNewSearch = (body) => ({type: SET_NEW_SEARCH, body: body})

export default mainPageHeaderReducer;