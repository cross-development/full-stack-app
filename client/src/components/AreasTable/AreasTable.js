//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import AreasHead from './AreasHead';
import AreasBody from './AreasBody';
//Styles
import { StyledTable } from './AreasTable.styles';

const AreasTable = ({ areas }) => {
	return (
		<StyledTable>
			<AreasHead />

			<AreasBody areas={areas} />
		</StyledTable>
	);
};

AreasTable.propTypes = {
	areas: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default AreasTable;
