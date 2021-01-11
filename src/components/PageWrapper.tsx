import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
	overrides: {
		MuiTableCell: {
			sizeSmall: {
				paddingTop: 2,
				paddingBottom: 2,
				paddingLeft: 1,
				paddingRight: 1,
				"&:first-child": {
					paddingLeft: 4
				},
				"&:last-child": {
					paddingRight: 4
				}
			}
		}
	}
});

export default function({ children }) {
	return (
		<CssBaseline>
			<MuiThemeProvider theme={theme}>
				<Container>
					{ children }
				</Container>
			</MuiThemeProvider>
		</CssBaseline>
	);
}