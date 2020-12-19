//Core
const { Router } = require('express');
//Controller
const areaController = require('./area.controller');
//Middleware
const areaMiddleware = require('./area.middleware');

const { validateID } = areaMiddleware;
const { getAreas, addArea } = areaController;
const { getAreaById, deleteAreaById, updateAreaById } = areaController;

//Init router
const areaRouter = Router();

// @ GET /api/areas
areaRouter.get('/', getAreas);

// @ GET /api/areas/:areaId
areaRouter.get('/:areaId', validateID, getAreaById);

// @ POST /api/areas
areaRouter.post('/', addArea);

// @ DELETE /api/areas/:areaId
areaRouter.delete('/:areaId', validateID, deleteAreaById);

// @ PATCH /api/areas/:areaId
areaRouter.patch('/:areaId', validateID, updateAreaById);

module.exports = areaRouter;
