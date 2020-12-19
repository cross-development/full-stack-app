//Core
import React from 'react';
//Components
import AreasRow from '../AreasRow';
//Styles
import { StyledTableBody } from './AreasBody.styles';

const AreasBody = ({ areas }) => (
	<StyledTableBody>
		{areas.map((area, idx) => (
			<AreasRow key={area._id} area={area} idx={idx} />
		))}
	</StyledTableBody>
);

export default AreasBody;
