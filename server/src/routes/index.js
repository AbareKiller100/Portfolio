const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const projectRoutes= require('./projectRoutes')
const imageRoutes= require('./imageRoutes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/project', projectRoutes);
router.use('/image', imageRoutes);

module.exports = router;
