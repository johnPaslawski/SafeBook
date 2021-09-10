const SET_MAIN_PAGE_PROJECTS = "SET_MAIN_PAGE_PROJECTS";
const SET_LOADING = "SET_LOADING";
const PROJECTS_TYPE = "Projects";//Need to add type of project in DB then delete this one

let initializeState = {
    projects : [],
    loading: false
};

const mainPageProjectsReducer = (state = initializeState, action) => {
    switch (action.type) {
        case SET_MAIN_PAGE_PROJECTS:
            return {
                ...state,
                projects: action.body
            };
        case SET_LOADING:
            return{
                ...state,
                loading: action.body
            }
        default:
            return state;
    }
}

export default mainPageProjectsReducer;

export const setMainPageProjects = (body) => ({type: SET_MAIN_PAGE_PROJECTS, body: body});
export const setLoading = (body) => ({type: SET_LOADING, body: body});

export const addProjectsType = (body) => {
    body.map( n => n.type = PROJECTS_TYPE);
    return body;
};//Need to add type of project in DB then delete this one