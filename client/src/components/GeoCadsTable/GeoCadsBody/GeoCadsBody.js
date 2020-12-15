//Core
import React from 'react';
//Components
import GeoCadsRow from '../GeoCadsRow';

const GeoCadsBody = ({ geoCads }) => (
	<tbody>
		{geoCads.map(cad => (
			<GeoCadsRow key={cad.id} cad={cad} />
		))}
	</tbody>
);

export default GeoCadsBody;
