import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';

import HeaderRow from './HeaderRow';
import DriverRows from './DriverRows';

import useSort from '../hooks/useSort';

import driverSeasons from '../datalayer/collections/driver-season';
import races from '../datalayer/collections/race';

export default function SeasonResultsTable({ season }) {
	const { handleRequestSort, orderBy, order } = useSort('points', 'desc');

	const seasonRaces = races.filter((race) => {
		return race.season === season;
	});
	seasonRaces.sort((a, b) => {
		return a.round - b.round;
	});

	const seasonDriversByNumber = new Map();
	seasonRaces.forEach((race) => {
		// the driver number is the key of race.drivers
		const drivers = Object.keys(race.drivers);
		drivers.forEach((n) => {
			if (!seasonDriversByNumber.has(n)) {
				const driverSeason = driverSeasons.getByNumberAndSeason(n, season);
				if (driverSeason) {
					let points = 0;
					races.forEach((race) => {
						if (race.drivers[n]) {
							points += race.drivers[n].pts || 0;
						}
					});
					seasonDriversByNumber.set(n, {
						driver: driverSeason.driver,
						points,
						n
					});
				}
				else {
					console.warn(`missing data for driver number ${n} for the ${season}`);
				}
			}
		});
	});

	const seasonDrivers = Array.from(seasonDriversByNumber.values());

	return (
		<TableContainer component={Paper}>
			<Table size="small">
				<TableHead>
					<HeaderRow
						order={order}
						orderBy={orderBy}
						onRequestSort={handleRequestSort}
						seasonRaces={seasonRaces}
					/>
				</TableHead>
				<TableBody>
					<DriverRows
						order={order}
						orderBy={orderBy}
						seasonDrivers={seasonDrivers}
						seasonRaces={seasonRaces}
					/>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
