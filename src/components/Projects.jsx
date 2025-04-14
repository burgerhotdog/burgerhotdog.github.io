import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { GitHub } from '@mui/icons-material';

const Projects = () => {
  const projects = [
    {
      title: "Rating Pistol",
      description: "Comprehensive build tracker and analysis tool for popular gacha games such as Genshin Impact, Honkai Star Rail, Wuthering Waves, and Zenless Zone Zero.",
      image: "https://source.unsplash.com/random/800x600/?ecommerce",
      github: "https://github.com/burgerhotdog/rating-pistol",
      live: "https://burgerhotdog.github.io/rating-pistol",
    },
    {
      title: "Pokémon TCGP Pack Simulator",
      description: "Simulate opening Pokémon TCGP packs, complete with accurate card selection probabilities and animation effects.",
      image: "https://source.unsplash.com/random/800x600/?task",
      github: "https://github.com/burgerhotdog/tcgp-sim",
      live: "https://burgerhotdog.github.io/tcgp-sim",
    },
    {
      title: "reBabel Desktop",
      description: "Desktop application helping linguists convert language data between common file formats used in research, such as ELAN, flextext, and CoNLL-U.",
      image: "https://source.unsplash.com/random/800x600/?language",
      github: "https://github.com/ElizabethThorner/FrontEndRebabel",
      live: "https://github.com/ElizabethThorner/FrontEndRebabel/releases",
    },
    {
      title: "Neurosurgery Web Portal",
      description: "Comprehensive web app for the University of Florida Neurosurgery Department facilitating appointment management for both patients and administrators.",
      image: "https://source.unsplash.com/random/800x600/?medical",
      github: "https://github.com/AlyssaMarotta/Neuro6",
      live: "https://neuro6.herokuapp.com/",
    },
  ];
  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, sm: 6 }} key={project.id}>
              <Card sx={{ height: "100%", display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
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
  )
};

export default Projects;