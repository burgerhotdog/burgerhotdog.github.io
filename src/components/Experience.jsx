import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Chip, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Divider 
} from "@mui/material";
import { 
  Work as WorkIcon, 
  School as SchoolIcon,
  Code,
  Build 
} from "@mui/icons-material";

const ExperienceAndSkills = () => {
  const experience = [
    {
      title: "Full Stack Developer - AI Training",
      company: "DataAnnotation",
      period: "Feb 2025 - Present",
      description: "Developing and evaluating code to train AI models in programming tasks. Responsibilities include creating diverse coding problems, writing high-quality solutions in Python and JavaScript, verifying the correctness and functionality of AI-generated code, explaining solution approaches, and evaluating code quality for correctness and performance.",
    },
    {
      title: "Audio-Visual Technician",
      company: "UF Edge",
      period: "Jan 2020 - May 2025",
      description: "Managed recording and production of college lectures for UF graduate engineering courses. Responsibilities included operating recording equipment, live editing, handling audio and visual systems, troubleshooting technical issues, and publishing lectures to Mediasite platform for online student access.",
    },
    {
      title: "Scribe",
      company: "CopyTalk Business Services",
      period: "Feb 2023 - Jun 2023",
      description: "",
    },
  ];

  const education = {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Florida",
    year: "2024",
  };

  const skills = {
    techStack: ['Python', 'JavaScript', 'Java', 'C++', 'C', 'HTML', 'React', 'Material-UI', 'Node.js', 'RESTful APIs', 'Firebase', 'CI/CD'],
    toolsAndOther: ['Git', 'Agile/Scrum', 'Sony Vegas', 'DaVinci Resolve', 'CodeSandbox'],
  };

  return (
    <Box sx={{ py: 8, px: 2, bgcolor: "background.paper" }} id="experience-skills">
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Experience & Skills
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Experience */}
          <Grid size={{ xs: 12, md: 6 }}>
            <List sx={{ height: '100%' }}>
              {experience.map((exp, index) => (
                <Box key={index}>
                  <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                    <ListItemIcon>
                      <WorkIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h6">
                          {exp.title} at {exp.company}
                        </Typography>
                      }
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {exp.period}
                          </Typography>
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            {exp.description}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  {index < experience.length - 1 && <Divider variant="inset" component="li" />}
                </Box>
              ))}
              <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                <ListItemIcon>
                  <SchoolIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6">
                      {education.degree}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" color="text.primary">
                      {education.institution}, {education.year}
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Grid>

          {/* Skills */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Card sx={{ flex: 1, mb: 2 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                    <Code sx={{ mr: 1 }} /> Languages & Frameworks
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {skills.techStack.map((skill, index) => (
                      <Chip key={index} label={skill} color="primary" sx={{ mb: 1 }} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
              <Card sx={{ flex: 1 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                    <Build sx={{ mr: 1 }} /> Tools & Other Skills
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {skills.toolsAndOther.map((skill, index) => (
                      <Chip key={index} label={skill} color="secondary" variant="outlined" sx={{ mb: 1 }} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ExperienceAndSkills; 