import React from 'react';
import DriverRow from './DriverRow';

export default function DriverRows({ seasonDrivers, seasonRaces, order, orderBy }) {
	const reverse = order === 'desc' ? 1 : -1;
	if (orderBy === 'points') {
		seasonDrivers.sort((a, b) => {
			const pointsDiff = b.points - a.points;
			if (pointsDiff !== 0) {
				return reverse * pointsDiff;
			}
			else {
				// tie-break: number of best-place finishes
				// starting at position 1, count the number of times each driver
				// has finished in that position. The driver that has finished in
				// that position the most times wins. In the case of a tie, move
				// to the next position
				for (let position = 1; position <= seasonDrivers.length; position += 1) {
					let timesPlacedA = 0;
					let timesPlacedB = 0;
					seasonRaces.forEach((race) => {
						const drivers = race.drivers;
						timesPlacedA += drivers[a.n]?.p === position ? 1 : 0;
						timesPlacedB += drivers[b.n]?.p === position ? 1 : 0;
					});
					if (timesPlacedA !== timesPlacedB) {
						const placedDiff = timesPlacedB - timesPlacedA;
						return reverse * placedDiff;
					}
				}
				return b.driver.fullName < a.driver.fullName ? 1 : -1;
			}
		});
	}
	else if (orderBy === 'name') {
		seasonDrivers.sort((a, b) => {
			const o = b.driver.fullName < a.driver.fullName ? -1 : 1;
			return reverse * o;
		});
	}
	else {
		const race = seasonRaces.find((race) => race.shortName === orderBy);
		function sortValue(p) {
			switch (p) {
				case 'DNF':
					return 50;
				case 'DNS':
					return 51;
				case 'DNQ':
					return 52;
				case 'DSQ':
					return 53;
				default:
					if (typeof p === 'number') {
						return p;
					}
					return 53;
			}
		}
		seasonDrivers.sort((a, b) => {
			const pA = sortValue(race.drivers[a.n]?.p);
			const pB = sortValue(race.drivers[b.n]?.p);
			const positionDiff = pB - pA;
			if (positionDiff !== 0) {
				return reverse * positionDiff;
			}
			else {
				return b.driver.fullName < a.driver.fullName ? 1 : -1;
			}
		});
	}

	return seasonDrivers.map(({ driver, points, n }) => {
		return (
			<DriverRow
				key={n}
				seasonRaces={seasonRaces}
				driver={driver}
				points={points}
				driverNumber={n}
			/>
		);
	});
}
