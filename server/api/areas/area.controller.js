//Model
const areaModel = require('./area.model');

//Create
async function addArea(req, res, next) {
	try {
		const createdAreas = await areaModel.create(req.body);

		return res.status(201).json(createdAreas);
	} catch (error) {
		next(error);
	}
}

//Read
async function getAreas(req, res, next) {
	try {
		const areas = await areaModel.find();

		return res.status(200).json(areas);
	} catch (error) {
		next(error);
	}
}

//Read
async function getAreaById(req, res, next) {
	try {
		const { areaId } = req.params;
		const area = await areaModel.findOne({ _id: areaId });

		!area ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(area);
	} catch (error) {
		next(error);
	}
}

//Update
async function updateAreaById(req, res, next) {}

//Delete
async function deleteAreaById(req, res, next) {}

module.exports = { getAreas, addArea, getAreaById, deleteAreaById, updateAreaById };
