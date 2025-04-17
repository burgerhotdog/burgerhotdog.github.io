import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { GitHub } from '@mui/icons-material';

const Projects = () => {
  const projects = [
    {
      title: "Rating Pistol",
      description: "Comprehensive build tracker and analysis tool for popular gacha games such as Genshin Impact, Honkai Star Rail, Wuthering Waves, and Zenless Zone Zero.",
      image: `${import.meta.env.BASE_URL}p1.png`,
      github: "https://github.com/burgerhotdog/rating-pistol",
      live: "https://burgerhotdog.github.io/rating-pistol",
    },
    {
      title: "Pokémon TCGP Pack Simulator",
      description: "Simulate opening Pokémon TCGP packs, complete with accurate card selection probabilities and animation effects.",
      image: `${import.meta.env.BASE_URL}p2.png`,
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
            <Grid size={{ xs: 12, sm: 6 }} key={project.title}>
              <Box sx={{ 
                position: 'relative', 
                height: '100%',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  '& .glow-effect': {
                    opacity: 0.25,
                    boxShadow: '0 5px 15px 2px rgba(255, 255, 255, 0.2)',
                  }
                }
              }}>
                <Box 
                  className="glow-effect"
                  sx={{
                    position: 'absolute',
                    top: 4,
                    left: 4,
                    right: 4,
                    bottom: 0,
                    borderRadius: 2,
                    boxShadow: '0 5px 10px 1px rgba(255, 255, 255, 0.15)',
                    filter: 'blur(5px)',
                    opacity: 0.15,
                    zIndex: -1,
                    transition: 'all 0.3s ease-in-out',
                  }} 
                />
                <Card sx={{ 
                  height: "100%", 
                  display: 'flex', 
                  flexDirection: 'column',
                  boxShadow: 2,
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 4,
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: "cover", objectPosition: "center top" }}
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
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
};

export default Projects;