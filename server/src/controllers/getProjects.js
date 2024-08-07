const { where, Op } = require('sequelize');
const {Projects}= require('../db');
const diacriticless = require('diacriticless');

const getAllProjects= async ()=>{
    const projects= await Projects.findAll();
    console.log(projects);

    return projects;
}

const getProjectsByID= async(id)=>{
    const project= await Projects.findByPk(id);

    return project;
}

const getProjectByName= async(title)=>{
    // Remover las tildes del nombre proporcionado
    const nombreSinTilde= diacriticless(title);

    // Buscar clientes cuyo nombre incluya el string proporcionado, sin importar mayúsculas o minúsculas
    const projects= await Projects.findAll({
        where: {
            title:{
                [Op.iLike]: `%${title}%`
            }
        }
    })

    // Si no se encuentran clientes que coincidan con el nombre proporcionado,
    // buscar entre todos los clientes y filtrar aquellos cuyos nombres sin tilde
    // incluyan el nombre proporcionado
    if(!projects){
        const projectsDB= await Projects.findAll();

        // Remover las tildes de los nombres de todos los clientes en la base de datos
        const proyectosSinTilde= projectsDB.map((project)=> project.dataValues.SecondName= diacriticless(project.dataValues.title));
        
        // Filtrar los clientes cuyos nombres sin tilde incluyan el nombre proporcionado
        projects= proyectosSinTilde.filter((proyecto)=> proyecto.dataValues.SecondName.includes(nombreSinTilde));
    }

    return projects;
}

module.exports= {getAllProjects, getProjectsByID, getProjectByName};