const {Projects}= require('../db');

const createNewProject= async (form)=>{
    const {title, description, date, image}= form;

    console.log(form)

    if(!title || !description || !date || !image){
        throw new Error('Faltan datos requeridos');
    }

    const newProject= {title, description, date, image};

    const createProject= await Projects.create(newProject);

    return createProject;
}

module.exports= createNewProject;