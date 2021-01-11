
import Model from 'ampersand-state';
import Collection from 'ampersand-collection';

import driverData from './driver-data.json';

const Driver = Model.extend({
	props: {
		id: 'string',
		firstName: 'string',
		lastName: 'string',
		nationality: 'string',
		flag: 'string',
	},
	derived: {
		fullName: {
			deps: ['firstName', 'lastName'],
			fn: function () {
				 return this.firstName + ' ' + this.lastName;
			}
		}
	}
});

const DriverCollection = Collection.extend({
	model: Driver
});

const drivers = new DriverCollection();

drivers.add(driverData);

export default drivers;
