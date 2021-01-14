import { Container, Grid } from '@material-ui/core';
import { Example } from '../components';

export default function HomePage() {
	return (
		<Container maxWidth="md">
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Example text="I'm the property 'text'" />
				</Grid>
			</Grid>
		</Container>
	);
}
