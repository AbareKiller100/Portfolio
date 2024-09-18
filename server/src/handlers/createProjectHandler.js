const createNewProject= require('../controllers/createProject')
const {getAllProjects, getProjectByName, getProjectsByID}= require('../controllers/getProjects')

const createProjectHandler= async(req, res)=>{
    try{
        const form= req.body;
        const response= await createNewProject(form);
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(400).json({ message: "Failed to create", error: error.message })
    }
}

const getProjectsHandler= async(req, res)=>{
    try{
        const response= await getAllProjects();
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(400).json({ message: "Failed to get", error: error.message })
    }
}

const getProjectsByIDHandler= async(req, res)=>{
    try{
        const {id}= req.params;
        const response= await getProjectsByID(id);
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(400).json({ message: "Failed to create", error: error.message })
    }
}

const getProjectByNameHandler= async(req, res)=>{
    try{
        const {title}= req.query;
        const response= await getProjectByName(title);
        res.status(200).json(response);
    } catch(error){
        console.error(error);
        res.status(400).json({ message: "Failed to get", error: error.message })
    }
}

module.exports= {createProjectHandler, getProjectsHandler, getProjectsByIDHandler, getProjectByNameHandler};