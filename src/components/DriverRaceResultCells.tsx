import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import DriverRaceResultCell from './DriverRaceResultCell';

export default function DriverRaceResultCells({ seasonRaces, driverNumber }) {
	return seasonRaces.map((race) => {
		const round = race.round;
		const driver = race.drivers[driverNumber];
		if (driver) {
			return (
				<DriverRaceResultCell
					key={round}
					position={driver.p}
					fastestLap={driver.fastestLap}
				/>
			);
		}
		else {
			// driver did not take part in this race
			return (
				<TableCell key={round} align="center">
					-
				</TableCell>
			);
		}
	});
}
