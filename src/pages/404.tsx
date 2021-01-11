import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import GatsbyLink from 'gatsby-link';
import PageWrapper from '../components/PageWrapper';

export default function NoPage() {
	return (
		<PageWrapper>
			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
					Oops! That's a 404 :(
				</Typography>
				<Link component={ GatsbyLink } to="/" >
					Go back home
				</Link>
			</Box>
		</PageWrapper>
	);
}