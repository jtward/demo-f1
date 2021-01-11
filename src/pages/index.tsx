import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import SeasonResultsTable from '../components/SeasonResultsTable';
import PageWrapper from '../components/PageWrapper';
import { useForm, Controller } from "react-hook-form";

import seasons from '../datalayer/collections/season';

function SeasonMenuItem(season) {
	const y = `${season.year}`;
	return (
		<MenuItem key={y} value={y}>{y}</MenuItem>
	);
}

export default function Index() {
	const { control } = useForm();
	return (
		<PageWrapper>

			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
					Example code: React & Material UI
				</Typography>
			</Box>
			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
					Formula 1 Drivers' Championship
				</Typography>
				Tap on the column headers to sort the table.
				<Controller
					control={control}
					name="season"
					defaultValue={seasons.at(0).year}
					render={(
						{ onChange, value }
					) => (
						<>
							<Box my={4}>
								<InputLabel id="season">
									Season
								</InputLabel>
								<Select
									id="season-select"
									labelId="season"
									value={value}
									onChange={(event) => onChange(parseInt(event.target.value as string, 10))}
								>
									{seasons.map(SeasonMenuItem)}
								</Select>
							</Box>
							<Box my={4}>
								<SeasonResultsTable season={value} />
							</Box>
						</>
					)}
				/>
			</Box>
		</PageWrapper>
	);
}