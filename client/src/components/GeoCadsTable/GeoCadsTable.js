//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import GeoCadsBody from './GeoCadsBody';

const GeoCadsTable = ({ geoCads }) => {
	return (
		<div>
			<GeoCadsBody geoCads={geoCads} />
		</div>
	);
};

GeoCadsTable.propTypes = {
	geoCads: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default GeoCadsTable;
