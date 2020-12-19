//Core
const { Schema, model } = require('mongoose');

const areaSchema = new Schema({
	legalEntity: { type: String, required: true },
	department: { type: String, required: true },
	villageCouncil: { type: String, required: true },
	fieldNumber: { type: String, required: true },
	fieldAreaHa: { type: Number, required: true },
	sownAreaHa: { type: Number, required: true },
	landArea: { type: Number, required: true },
	culture: { type: String, required: true },
	cultureYear: { type: Number, required: true },
	cadNumber: { type: String, required: true },
	mortgagee: { type: String, required: false },
	ownership: { type: String, required: true },
	registrationStatus: { type: String, required: false },
	registrationAgency: { type: String, required: false },
	longitude: { type: Number, required: false },
	latitude: { type: Number, required: false },
});

module.exports = model('Area', areaSchema);
