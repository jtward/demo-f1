import React from 'react';
import PropTypes from 'prop-types';

function flagUrl(flag, x) {
	const px = 25 * x;
	return `/flags/${px}/${flag}.png`;
}

function flagSrcSetEntry(flag, x) {
	const url = flagUrl(flag, x);
	if (x === 1) {
		return url;
	}
	else {
		return `${url} ${x}x`;
	}
}

function flagSrcSet(flag) {
	const resolutions = [1, 2];
	const entries = resolutions.map((x) => flagSrcSetEntry(flag, x));
	return entries.join(', ');
}

export default function Flag({ flag }) {
	return (
		<img
			width="25"
			srcSet={flagSrcSet(flag)}
			src={flagUrl(flag, 1)}
			alt={`Flag ${flag}`}
		/>
	);
}

Flag.propTypes = {
	flag: PropTypes.string.isRequired
};