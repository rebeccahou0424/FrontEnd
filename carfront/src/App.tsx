import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Carlist from './components/Carlist';


function App() {

	const queryClient = new QueryClient();

  return (
    <Container maxWidth="xl">
  	<CssBaseline />
  	<AppBar position="static">
      	<Toolbar>
        	<Typography variant="h6">
          	Car Shop
        	</Typography>
      	</Toolbar>
  	</AppBar>
	<QueryClientProvider client={queryClient}>
		<Carlist></Carlist>
    </QueryClientProvider>
  	</Container>
  )
}

export default App
