const express= require('express');
const router= express.Router();
const {createImageHandler, getImagesHandler, getImageByProjectHandler}= require('../handlers/imagesHandler')

router.post('/post', createImageHandler);
router.get('/get', getImagesHandler);
router.get('/:project', getImageByProjectHandler);

module.exports= router;