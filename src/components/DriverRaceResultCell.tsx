import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import styled, { css } from 'styled-components';

// using position absolute here makes the horizontal centering of the
// position ignore the presence of the fastest lap marker, so they remain
// aligned with each other even when fastest lap markers are applied
const FastestLapSpan = styled.sup`
	font-size: 0.66rem;
	position: absolute;
`;

function FastestLapMarker() {
	return (
		<FastestLapSpan>F</FastestLapSpan>
	);
}

// className is required for this component to be styled using
// styled-components.
function DriverRaceResultCell({ className = "", position, fastestLap }) {
	return (
		<TableCell className={className} align="center">
			<div style={{ position: 'relative' }}>
				{position}
				{fastestLap ? <FastestLapMarker /> : null}
			</div>
		</TableCell>
	);
};

function positionToBackground(position) {
	const gold = '#ffeb3b';
	const silver = '#b0bec5';
	const bronze = '#cd7f32';
	const points = '#c5e1a5';
	const finish = '#9fa8da';
	const dnf = '#ce93d8';
	const dsq = '#424242';
	const other = '#ffffff';

	switch (position) {
		case 1:
			return gold;
		case 2:
			return silver;
		case 3:
			return bronze;
		case 'DNF':
		case 'DNQ':
		case 'DNS':
			return dnf;
		case 'DSQ':
			return dsq;
		default:
			if (position <= 10) {
				return points;
			}
			if (typeof position === 'number') {
				return finish;
			}
			return other;
	}
}

function positionToColor(position) {
	if (position === 'DSQ') {
		return '#ffffff';
	}
}

function propsToStyles({ position }) {
	const background = positionToBackground(position);
	const color = positionToColor(position);
	return `
	  ${background ? `background: ${background};` : ''}
	  ${color ? `color: ${color};` : ''}
	`;
}

const DriverRaceResultCellStyled = styled(DriverRaceResultCell)`
	${props => css`${propsToStyles(props)}`}
`;

export default DriverRaceResultCellStyled;