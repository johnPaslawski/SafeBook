const SET_AUTH = "SET_AUTH";
const SET_USER_ID = "SET_USER";

const initialState = {
    auth: false,
    userId: {}
}

const authenticationReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return{
                ...state,
                auth: action.body
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
export const setuSER = (userId) => ({type: SET_USER_ID, body: userId});

//Middleware, Thunks


export default authenticationReducer;