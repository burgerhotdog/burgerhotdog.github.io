import { Box, Container, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box sx={{ 
      py: 10, 
      textAlign: "center",
      background: "linear-gradient(to right, #121212, #1e1e1e)",
    }}>
      <Container>
        <Typography variant="h2">
          Darren Wang
        </Typography>
        <Typography variant="h5" color="primary">
          🛠️ Software Engineer / 💻 Full-stack Developer
        </Typography>
        <Box sx={{ mt: 2 }}>
          <IconButton
            aria-label="github"
            color="inherit"
            href="https://github.com/burgerhotdog"
            target="_blank"
          >
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="linkedin"
            color="inherit"
            href="https://linkedin.com/in/burgerhotdog"
            target="_blank"
          >
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="email"
            color="inherit"
            href="mailto:burgerhotdog@gmail.com"
          >
            <Mail fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
};

export default Hero;