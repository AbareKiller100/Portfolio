const {ProjectsImages, Projects}= require('../db')

const createNewImage= async(form)=>{

    const {url}= form;

    if(!url){
        throw new Error('Falta la URL')  
    }
    const newImage= {url}

    const createImage= await ProjectsImages.create(newImage);

    if(form.ProjectId){
        const project= await Projects.findByPk(form.ProjectId);
        
        if(!project){
            throw new Error('Esta imagen no corresponde a ningún proyecto');
        } else{
            createImage.ProjectId= project.dataValues.id;
            await createImage.save();
        }
    }

    return createImage;
}

module.exports= createNewImage;