import { GET_PROJECTS, GET_PROJECT_BY_NAME, GET_DETAIL, GET_IMAGES, REMOVE_DETAIL, SHOW_HOVER } from "./actionsTypes";
import axios from "axios";

export const getProjects= ()=>{
    return async function(dispatch){
        try{
            const URL= 'http://localhost:3001/project/get';
            const response= await axios.get(URL)
            const allProjects=response.data;
            // console.log(allProjects);
            return dispatch({type:GET_PROJECTS, payload:allProjects});
        } catch(error){
            console.error(error);
        }
    }
}

export const getDetail= (id)=>{
    return async function(dispatch){
        try{
            const URL= `http://localhost:3001/project/getOne/${id}`;
            const response= await axios.get(URL)
            const project=response.data;
            return dispatch({type:GET_DETAIL, payload:project});
        } catch(error){
            console.error(error);
        }
    }
}

// export const showHover= (id)=>{
//     return async function(dispatch){
//         try{
//             const URL= `http://localhost:3001/project/${id}`;
//             const response= await axios.get(URL)
//             const project=response.data;
//             return dispatch({type:SHOW_HOVER, payload: project});
//         } catch(error){
//             console.error(error);
//         }
//     }
// }

export const removeDetail= ()=>{
    return {type:REMOVE_DETAIL};
}

export const getProjectByName= (name)=>{
    return async function(dispatch){
        try{
            const URL= `http://localhost:3001/project/name?title=${name}`;
            const response= await axios.get(URL)
            const project=response.data;
            // console.log(project);
            
            return dispatch({type:GET_PROJECT_BY_NAME, payload:project});
        } catch(error){
            console.error(error);
        }
    }
}

export const getImages= (project)=>{
    return async function(dispatch){ 
        try{
            const URL= `http://localhost:3001/image/${project}`;
            const response= await axios.get(URL)
            const images =response.data;
            return dispatch({type:GET_IMAGES, payload:images});
        } catch(error){
            console.error(error);
        }
    }
}

