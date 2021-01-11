
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import HeaderCell from './HeaderCell';
import createSortHandler from '../utils/createSortHandler';

export default function HeaderRow({ seasonRaces, order, orderBy, onRequestSort }) {
	return (
		<TableRow>
			<TableCell key="driver">
				<TableSortLabel
					active={orderBy === 'name'}
					direction={orderBy === 'name' ? order : 'asc'}
					onClick={createSortHandler(onRequestSort, 'name')}
				>
					Driver
					{orderBy === 'name' ? (
						<span style={{ display: 'none' }}>
							{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
						</span>
					) : null}
				</TableSortLabel>
			</TableCell>
			{ seasonRaces.map(({ shortName, flag }) =>
				<HeaderCell
					key={shortName}
					order={order}
					orderBy={orderBy}
					onRequestSort={onRequestSort}
					shortName={shortName}
					flag={flag}
				/>
			)}
			<TableCell key="points" align="right">
				<TableSortLabel
					active={orderBy === 'points'}
					direction={orderBy === 'points' ? order : 'desc'}
					onClick={createSortHandler(onRequestSort, 'points', 'desc')}
				>
					Points
					{orderBy === 'points' ? (
						<span style={{ display: 'none' }}>
							{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
						</span>
					) : null}
				</TableSortLabel>
			</TableCell>
		</TableRow>
	);
}