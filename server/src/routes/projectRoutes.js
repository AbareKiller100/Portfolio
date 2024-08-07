const express= require('express');
const router= express.Router();
const {createProjectHandler, getProjectsHandler, getProjectsByIDHandler, getProjectByNameHandler}= require('../handlers/createProjectHandler')

router.post('/post', createProjectHandler);
router.get('/get', getProjectsHandler);
router.get('/getOne/:id', getProjectsByIDHandler);
router.get('/name', getProjectByNameHandler);

module.exports= router;
