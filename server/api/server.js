//Core
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
//Middleware
const cors = require('cors');
require('dotenv').config();
//Routes
const areaRouter = require('./areas/area.router');
//Handle logs
const accessLogStream = require('./accessLogStream');

class AreasServer {
	constructor() {
		this.server = null;
		this.port = 2000;
	}

	async start() {
		this.initServer();
		this.initMiddleware();
		this.initRoutes();
		await this.initDatabase();
		this.startListening();
	}

	initServer() {
		this.server = express();
	}

	initMiddleware() {
		this.server.use(express.json());
		this.server.use(morgan('combined', { stream: accessLogStream }));
		this.server.use(cors({ origin: 'http://localhost:3000' }));
	}

	initRoutes() {
		this.server.use('/api/areas', areaRouter);
	}

	async initDatabase() {
		try {
			await mongoose.connect(process.env.MONGODB_URL, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			});

			console.log('Database connection successful');
		} catch (error) {
			process.exit(1);
		}
	}

	startListening() {
		this.server.listen(this.port, () => {
			console.log('Server started listening on port', this.port);
		});
	}
}

module.exports = AreasServer;
