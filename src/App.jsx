import {
  CssBaseline,
  ThemeProvider,
  Container,
  Box,
  Typography,
} from '@mui/material';
import theme from "./theme";
import { Hero, Projects, Experience } from "@components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Hero />
        <Projects />
        <Experience />

        <Box sx={{ py: 3, bgcolor: "background.default", textAlign: "center" }}>
          <Container>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Built with React & Material-UI
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
