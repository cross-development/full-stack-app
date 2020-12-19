const baseUrl = 'http://localhost:2000/api';

const fetchAreasData = async () => {
	try {
		const response = await fetch(`${baseUrl}/areas`);

		const parsedResponse = await response.json();

		return parsedResponse;
	} catch (error) {
		throw error;
	}
};

const fetchAreaDataById = async areaId => {
	try {
		const response = await fetch(`${baseUrl}/areas/${areaId}`);

		const parsedResponse = await response.json();

		return parsedResponse;
	} catch (error) {
		throw error;
	}
};

const uploadDataToServer = async ({ file }) => {
	try {
		const response = await fetch(`${baseUrl}/areas`, {
			method: 'POST',
			body: file,
		});

		const parsedResponse = await response.json();

		return parsedResponse;
	} catch (error) {
		throw error;
	}
};

export { fetchAreasData, fetchAreaDataById, uploadDataToServer };
