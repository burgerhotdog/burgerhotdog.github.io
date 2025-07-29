import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
      marginBottom: '1rem',
    },
    h3: {
      fontWeight: 500,
      marginBottom: '0.5rem',
    },
  },
});

export default theme; 