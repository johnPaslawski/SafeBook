import { userApi } from "../../../api/UserApi";

const SET_USER = "SET_USER";

const initialState = { 
    user: {}
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.body
            };
        default:
            return state;
    }
}

export const setUser = (body) => ({
    type: SET_USER,
    body: body
 });

export const getUser = (id) => {
    return (dispatch) => {
        userApi.getUser(id)
        .then(data => {
            dispatch(setUser(data));
        });
    }
}

export default usersReducer;
