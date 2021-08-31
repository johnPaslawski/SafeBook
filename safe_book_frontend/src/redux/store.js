import { combineReducers, createStore } from "redux";
import mainPageHeaderReducer from "./reducers/MainPage/mainPageHeaderReducer";
import mainPageNewsReducer from "./reducers/MainPage/mainPageNewsReducer";

let reducers = combineReducers({
    mainPageHeader: mainPageHeaderReducer,
    mainPageNews:mainPageNewsReducer
})

let store = createStore(reducers);

export default store;
window.store = store;