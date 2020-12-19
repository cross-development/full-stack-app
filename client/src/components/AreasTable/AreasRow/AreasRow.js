//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledTableBodyRow, StyledTableBodyCell } from './AreasRow.styles';

const AreasRow = ({ area, idx }) => (
	<StyledTableBodyRow>
		<StyledTableBodyCell>{idx + 1}</StyledTableBodyCell>
		<StyledTableBodyCell>{area.legalEntity}</StyledTableBodyCell>
		<StyledTableBodyCell>{area.department}</StyledTableBodyCell>
		<StyledTableBodyCell>{area.villageCouncil}</StyledTableBodyCell>
		<StyledTableBodyCell>{area.fieldNumber}</StyledTableBodyCell>
		<StyledTableBodyCell>{area.fieldAreaHa}</StyledTableBodyCell>
		<StyledTableBodyCell>{area.sownAreaHa}</StyledTableBodyCell>
		<StyledTableBodyCell>{area.landArea}</StyledTableBodyCell>
		<StyledTableBodyCell>{area.culture}</StyledTableBodyCell>
		<StyledTableBodyCell>{area.cultureYear}</StyledTableBodyCell>
		<StyledTableBodyCell>{area.cadNumber}</StyledTableBodyCell>
		<StyledTableBodyCell>{area.mortgagee}</StyledTableBodyCell>
		<StyledTableBodyCell>{area.ownership}</StyledTableBodyCell>
		<StyledTableBodyCell>{area.registrationStatus}</StyledTableBodyCell>
		<StyledTableBodyCell>{area.registrationAgency}</StyledTableBodyCell>
		<StyledTableBodyCell>{area.longitude}</StyledTableBodyCell>
		<StyledTableBodyCell>{area.latitude}</StyledTableBodyCell>
	</StyledTableBodyRow>
);

AreasRow.propTypes = {
	idx: PropTypes.number.isRequired,
	area: PropTypes.shape({
		legalEntity: PropTypes.string.isRequired,
		department: PropTypes.string.isRequired,
		villageCouncil: PropTypes.string.isRequired,
		fieldNumber: PropTypes.string.isRequired,
		fieldAreaHa: PropTypes.number.isRequired,
		sownAreaHa: PropTypes.number.isRequired,
		landArea: PropTypes.number.isRequired,
		culture: PropTypes.string.isRequired,
		cultureYear: PropTypes.number.isRequired,
		cadNumber: PropTypes.string.isRequired,
		mortgagee: PropTypes.string,
		ownership: PropTypes.string.isRequired,
		registrationStatus: PropTypes.string,
		registrationAgency: PropTypes.string,
		longitude: PropTypes.number,
		latitude: PropTypes.number,
	}).isRequired,
};

AreasRow.defaultProps = {
	mortgagee: 'Не заложено',
	registrationStatus: 'Информация отсутствует',
	registrationAgency: 'Информация отсутствует',
	longitude: 'Информация отсутствует',
	latitude: 'Информация отсутствует',
};

export default AreasRow;
