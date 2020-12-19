//Validation package
const Joi = require('joi');
//Mongoose validation ObjID
const {
	Types: { ObjectId },
} = require('mongoose');

//The middleware validate area id (read, delete, update)
function validateID(req, res, next) {
	const { areaId } = req.params;

	if (!ObjectId.isValid(areaId)) {
		return res.status(400).send({ message: 'invalid id' });
	}

	next();
}

module.exports = { validateID };
