import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import projects from '@data/projects';

const Projects = () => {
  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, sm: 6 }} key={project.title}>
              <Card sx={{
                height: "100%",
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 2,
                borderRadius: 2,
              }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                    <Button
                      size="small"
                      startIcon={<GitHub />}
                      href={project.github}
                      target="_blank"
                    >
                      Code
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      href={project.live}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;