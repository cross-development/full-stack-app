//Core
import React, { useState, useEffect } from 'react';
//Components
import Form from '../Form';
import { Loader } from '../Common';
import AreasTable from '../AreasTable';
//Services
import { fetchAreasData, uploadDataToServer } from 'services/areaAPI';

const App = () => {
	const [areas, setAreas] = useState([]);
	const [loading, setLoading] = useState(false);

	const getAreasData = () => {
		setLoading(true);

		fetchAreasData()
			.then(setAreas)
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		getAreasData();
	}, []);

	const handleSubmit = file => {
		setLoading(true);

		uploadDataToServer({ file })
			.then(data => setAreas(prevState => [...prevState, ...data]))
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	};

	return (
		<>
			<Form onHandleSubmit={handleSubmit} />

			{loading && <Loader onLoad={loading} />}

			{areas.length > 0 && <AreasTable areas={areas} />}
		</>
	);
};

export default App;
