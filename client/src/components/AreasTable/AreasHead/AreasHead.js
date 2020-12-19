//Core
import React from 'react';
//Data
import areasHeadLabels from './areasHead.json';
//Styles
import { StyledTableHead, StyledTableHeadRow, StyledTableHeadCell } from './AreasHead.styles';

const AreasHead = () => (
	<StyledTableHead>
		<StyledTableHeadRow>
			{areasHeadLabels.map(({ id, title }) => (
				<StyledTableHeadCell key={id}>{title}</StyledTableHeadCell>
			))}
		</StyledTableHeadRow>
	</StyledTableHead>
);

export default AreasHead;
