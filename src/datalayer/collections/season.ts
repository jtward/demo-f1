
import Model from 'ampersand-state';
import Collection from 'ampersand-collection';

import seasonData from './season-data.json';

const Season = Model.extend({
	idAttribute: 'year',
	props: {
		year: 'number',
	},
});

const SeasonCollection = Collection.extend({
	model: Season
});

const seasons = new SeasonCollection();

seasons.add(seasonData);
console.log(seasons);

export default seasons;
