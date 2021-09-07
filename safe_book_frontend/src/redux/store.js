import { combineReducers, createStore } from "redux";
import mainPageHeaderReducer from "./reducers/MainPage/mainPageHeaderReducer";
import mainPageNewsReducer from "./reducers/MainPage/mainPageNewsReducer";
import mainPageProjectsReducer from "./reducers/MainPage/mainPageProjectsReducer"

let reducers = combineReducers({
    mainPageHeader: mainPageHeaderReducer,
    mainPageNews: mainPageNewsReducer,
    mainPageProjects: mainPageProjectsReducer
})

let store = createStore(reducers);

export default store;
window.store = store;