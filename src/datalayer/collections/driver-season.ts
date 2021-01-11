
import Model from 'ampersand-state';
import Collection from 'ampersand-collection';
import Driver from './driver';
import Season from './season';

import driverSeasonData from './driver-season-data.json';

const DriverSeason = Model.extend({
	props: {
		driverId: 'string',
		seasonId: 'number',
		number: 'number'
	},
	derived: {
		id: {
			deps: ['number', 'seasonId'],
			fn() {
				return `${this.number}_${this.seasonId}`;
			}
		},
		driver: {
			deps: ['driverId'],
			fn() {
				 return Driver.get(this.driverId);
			}
		},
		season: {
			deps: ['seasonId'],
			fn() {
				return Season.get(this.seasonId);
			}
		}
	}
});

const DriverSeasonCollection = Collection.extend({
	model: DriverSeason,
	getByNumberAndSeason(number: number, season: number) {
		return this.get(`${number}_${season}`);
	}
});

const driverSeasons = new DriverSeasonCollection();

driverSeasons.add(driverSeasonData);

export default driverSeasons;
