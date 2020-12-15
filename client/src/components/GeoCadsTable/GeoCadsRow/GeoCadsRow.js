//Core
import React from 'react';

const GeoCadsRow = ({ cad }) => (
	<li>
		<p>{cad.num}</p>
		<p>{cad.department}</p>
		<p>{cad.villageCouncil}</p>
		<p>{cad.legalEntity}</p>
		<p>{cad.fieldNumber}</p>
		<p>{cad.fieldAreaHa}</p>
		<p>{cad.sownAreaHa}</p>
		<p>{cad.landArea}</p>
		<p>{cad.cultureYear}</p>
		<p>{cad.legal}</p>
		<p>{cad.cadNumber}</p>
		<p>{cad.mortgagee}</p>
		<p>{cad.ownership}</p>
		<p>{cad.registrationStatus}</p>
		<p>{cad.registrationAgency}</p>
		<p>{cad.longitude}</p>
		<p>{cad.latitude}</p>
	</li>
);

export default GeoCadsRow;
