
import Model from 'ampersand-state';
import Collection from 'ampersand-collection';

import raceData from './race-data.json';

const Race = Model.extend({
	idAttribute: 'name',
	props: {
		name: 'string',
		drivers: 'object',
		teams: 'array',
		round: 'number',
		season: 'number',
		shortName: 'string',
		flag: 'string'
	}
});

const RaceCollection = Collection.extend({
	model: Race
});

const races = new RaceCollection();

races.add(raceData);

export default races;
