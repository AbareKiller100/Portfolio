const createNewImage= require('../controllers/createImages');
const { getAllImages, getImagesByProject } = require('../controllers/getImages');

const createImageHandler= async(req, res)=>{
    try{
        const form= req.body;
        const response= await createNewImage(form);
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(400).json({ message: "Failed to create", error: error.message })
    }
}

const getImagesHandler= async(req, res)=>{
    try{
        const response= await getAllImages();
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(400).json({ message: "Failed to create", error: error.message })
    }
}

const getImageByProjectHandler= async(req, res)=>{
    try{
        const {project}= req.params;
        const response= await getImagesByProject(project);
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(400).json({ message: "Failed to create", error: error.message })
    }
}
module.exports={createImageHandler, getImagesHandler, getImageByProjectHandler}
