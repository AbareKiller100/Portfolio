import { GET_PROJECTS, GET_PROJECT_BY_NAME, GET_DETAIL, GET_IMAGES, REMOVE_DETAIL, SHOW_HOVER } from "./actionsTypes";

const initialState={
    projects:[],
    detailProject:{},
    hoverProject:{},
    projectsImages:[]
}

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_PROJECTS:            
            return {...state, projects: action.payload};
            
        case GET_PROJECT_BY_NAME:         
            return {...state, projects: action.payload};

        case GET_DETAIL:
            return {...state, detailProject: action.payload};

        // case SHOW_HOVER:
        //     return {...state, hoverProject: action.payload};

        case REMOVE_DETAIL:
            return {...state, detailProject: {}, hoverProject:{}};

        case GET_IMAGES:
            return {...state, projectsImages: action.payload};
    
        default:
            return {...state};
    }
}

export default rootReducer;