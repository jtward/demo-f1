import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import createSortHandler from '../utils/createSortHandler';
import Flag from './Flag';
import styled from 'styled-components';

// HeaderCell layout is a bit tricky because the flags are different heights
// we create a HeaderCellInner which fixes the height of the cell
// the height is 1.5rem which is the height of the text plus 25px which is the
// maximum size of the flags (apart from Nepal).
// then we just need to put the flags themselves in a container
// which takes up the remaining space and centers the flag vertically in that
// space.
const HeaderCellInner = styled.div`
	height: calc(1.5rem + 25px);
`;

const FlexVerticalFlag = styled.div`
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
`;


export default function HeaderCell({ shortName, flag, order, orderBy, onRequestSort }) {
	return (
		<TableCell align="center">
			<TableSortLabel
				active={orderBy === shortName}
				direction={orderBy === shortName ? order : 'asc'}
				onClick={createSortHandler(onRequestSort, shortName, 'asc')}
			>
				<HeaderCellInner>
					<div>{shortName}</div>
					<FlexVerticalFlag>
						<Flag flag={flag} />
					</FlexVerticalFlag>
				</HeaderCellInner>
				{orderBy === shortName ? (
					<span style={{ display: 'none' }}>
						{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
					</span>
				) : null}
			</TableSortLabel>
		</TableCell>
	);
}