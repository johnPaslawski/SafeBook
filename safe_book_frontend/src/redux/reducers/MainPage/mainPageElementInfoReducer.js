const SET_ELEMENT_DATA = "SET_ELEMENT_DATA";

const initialState = {
    elementData: {}
}

const mainPageElementInfoReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_ELEMENT_DATA:
            return{
                ...state,
                elementData: action.body
            }
        default:
            return state;
    }
}

export default mainPageElementInfoReducer;

export const setElementData = (body) => ({ type: SET_ELEMENT_DATA, body: body });