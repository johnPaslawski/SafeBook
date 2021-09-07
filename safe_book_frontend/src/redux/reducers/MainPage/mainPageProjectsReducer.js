const SET_MAIN_PAGE_PROJECTS = "SET_MAIN_PAGE_PROJECTS";
const PROJECTS_TYPE = "Project";//Need to add type of project in DB then delete this one

let initializeState = {
    mainPageProjects : []
};

const mainPageProjectsReducer = (state = initializeState, action) => {
    switch (action.type) {
        case SET_MAIN_PAGE_PROJECTS:
            return {
                ...state,
                mainPageProjects: action.body
            };
        default:
            return state;
    }
}

export default mainPageProjectsReducer;

export const setMainPageProjectsActionCreator = (body) => ({type: SET_MAIN_PAGE_PROJECTS, body: body});

export const addProjectsType = (body) => {
    body.map( n => n.type = PROJECTS_TYPE);
    return body;
};//Need to add type of project in DB then delete this one