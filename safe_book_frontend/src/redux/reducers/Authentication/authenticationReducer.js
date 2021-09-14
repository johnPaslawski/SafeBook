import { authApi } from "../../../api/AuthApi";

const SET_AUTH = "SET_AUTH";
const SET_USER_MANAGER = "SET_USER_MANAGER";
const SET_USER_ID = "SET_USER";

const initialState = {
    auth: false,
    userManager: null,
    userId: null
}

const authenticationReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return{
                ...state,
                auth: action.body
            }
        case SET_USER_MANAGER:
            return{
                ...state,
                userManager: action.body
            }
        case SET_USER_ID:
            return{
                ...state,
                userId: action.body
            }
        default:
            return state;
    }
}

//Actions
export const setAuth = (isAuth) => ({type: SET_AUTH, body: isAuth});
export const setUserManager = (userManager) => ({type: SET_USER_MANAGER, body: userManager});
export const setUserId = (userId) => ({type: SET_USER_ID, body: userId});

//Middleware, Thunks

export const getAuth = () => {
    return (dispatch) => {
        
        authApi.auth((userManager) => dispatch(setUserManager(userManager)))
        .then(isAuthorized =>
            isAuthorized && dispatch(setAuth(true))); // TODO not sure if this is a good way to setAuth()
    }
}

export default authenticationReducer;