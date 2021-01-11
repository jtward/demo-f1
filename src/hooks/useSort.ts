import React from 'react';

// this hook was adapted from the example at
// https://codesandbox.io/s/f71wj
// extracted to a hook and added the option to set the default
// direction when switching to a new orderBy

export type Order = "asc" | "desc";
export type RequestSortHandler = (property: string, defaultOrder?: Order) => void;

export default function useSort(initialOrderBy: string, initialOrder: Order) {
	const [order, setOrder] = React.useState(initialOrder);
	const [orderBy, setOrderBy] = React.useState(initialOrderBy);

	const handleRequestSort:RequestSortHandler = (property, defaultOrder) => {
		let isAsc;
		if (orderBy === property) {
			isAsc = order === 'asc';
		}
		else {
			isAsc = order === 'asc';
			if (defaultOrder) {
				// assume that if order is not desc then it must be asc
				isAsc = defaultOrder === 'desc';
			}
		}

		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	return { handleRequestSort, orderBy, order };
}
