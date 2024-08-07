const { where } = require('sequelize');
const {ProjectsImages, Projects}= require('../db');

const getAllImages= async ()=>{
    const images= await ProjectsImages.findAll();

    return images;
}

const getImagesByProject= async(project)=>{

    // const findProject= await Projects.findOne({
    //     where:{
    //         title: project
    //     }
    // })

    const imagesByProject= await ProjectsImages.findAll({
        where: {
            ProjectId: project
        }
    })

    return imagesByProject;
}

module.exports= {getAllImages, getImagesByProject};