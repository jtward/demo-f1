import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DriverRaceResultCells from './DriverRaceResultCells';
import Flag from './Flag';
import styled from 'styled-components';

const DriverCell = styled(TableCell)`
	display: flex;
	align-items: center;
`;

const DriverName = styled.div`
	margin-left: 8px;
`;

export default function DriverRow({ seasonRaces, driver, points, driverNumber }) {
	return (
	  <TableRow>
		 <DriverCell key="name">
			<Flag flag={ driver.flag }/>
			<DriverName>{ driver.fullName }</DriverName>
		 </DriverCell>
		 <DriverRaceResultCells
			seasonRaces={seasonRaces}
			driverNumber={driverNumber}
			/>
		 <TableCell key="points" align="right">
			{ points }
		 </TableCell>
	  </TableRow>
	);
 }