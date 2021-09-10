import { combineReducers, createStore } from "redux";
import mainPageHeaderReducer from "./reducers/MainPage/mainPageHeaderReducer";
import mainPageNewsReducer from "./reducers/MainPage/mainPageNewsReducer";
import mainPageProjectsReducer from "./reducers/MainPage/mainPageProjectsReducer"
import mainPageElementInfoReducer from "./reducers/MainPage/mainPageElementInfoReducer"

let reducers = combineReducers({
    mainPageHeader: mainPageHeaderReducer,
    mainPageNews: mainPageNewsReducer,
    mainPageProjects: mainPageProjectsReducer,
    mainPageElementInfo: mainPageElementInfoReducer
})

let store = createStore(reducers);

export default store;
window.store = store;