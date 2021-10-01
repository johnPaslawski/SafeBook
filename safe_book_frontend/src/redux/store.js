import { applyMiddleware, combineReducers, createStore } from "redux";
import mainPageHeaderReducer from "./reducers/MainPage/mainPageHeaderReducer";
import mainPageNewsReducer from "./reducers/MainPage/mainPageNewsReducer";
import mainPageProjectsReducer from "./reducers/MainPage/mainPageProjectsReducer";
import mainPageElementInfoReducer from "./reducers/MainPage/mainPageElementInfoReducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    mainPageHeader: mainPageHeaderReducer,
    mainPageNews: mainPageNewsReducer,
    mainPageProjects: mainPageProjectsReducer,
    mainPageElementInfo: mainPageElementInfoReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;