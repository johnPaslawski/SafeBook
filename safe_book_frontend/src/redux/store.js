import { combineReducers, createStore } from "redux";
import mainPageHeaderReducer from "./reducers/MainPage/mainPageHeaderReducer";

let reducers = combineReducers({
    mainPageHeader: mainPageHeaderReducer
})

let store = createStore(reducers);

export default store;
window.store = store;