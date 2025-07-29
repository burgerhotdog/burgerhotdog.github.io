import { Box, Container, Typography, IconButton, Tooltip, useTheme } from '@mui/material';
import { GitHub, LinkedIn, Mail, Description } from '@mui/icons-material';
import links from '@data/hero.json';

const Hero = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      py: 10,
      textAlign: "center",
      background: `linear-gradient(to right, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
    }}>
      <Container>
        <Typography variant="h2">
          Darren Wang
        </Typography>
        <Typography variant="h5" color="primary">
          🛠️ Software Engineer / 💻 Full-stack Developer
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Tooltip title="Github">
            <IconButton
              aria-label="github"
              color="inherit"
              href={links.github}
              target="_blank"
            >
              <GitHub fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <IconButton
              aria-label="linkedin"
              color="inherit"
              href={links.linkedin}
              target="_blank"
            >
              <LinkedIn fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Email">
            <IconButton
              aria-label="email"
              color="inherit"
              href={links.email}
            >
              <Mail fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Resume">
            <IconButton
              aria-label="resume"
              color="inherit"
              href={links.resume}
              target="_blank"
            >
              <Description fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
