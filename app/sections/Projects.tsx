import { Box, Grid, Heading } from '@chakra-ui/react';
import { h3 } from '../themes/components/heading_theme';
import ProjectCard, { Project } from '../components/ProjectCard';

const Projects = () => {
  const PROJECTS:Project[] = [
    {
      title: "Project 1",
      description: "This is a project description.",
      image: {
        src: "https://placeholder.com/430/285",
        alt: "This is an image of a project."
      },
      links: {
        repo: "https://github.com",
        url: "https://google.com"
      }
    },
    {
      title: "Project 2",
      description: "This is a project description.",
      image: {
        src: "https://placeholder.com/430/285",
        alt: "This is an image of a project."
      },
      links: {
        repo: "https://github.com",
        url: "https://google.com"
      }
    },
    {
      title: "Project 3",
      description: "This is a project description.",
      image: {
        src: "https://placeholder.com/430/285",
        alt: "This is an image of a project."
      },
      links: {
        repo: "https://github.com",
        url: "https://google.com"
      }
    },
    {
      title: "Project 4",
      description: "This is a project description.",
      image: {
        src: "https://placeholder.com/430/285",
        alt: "This is an image of a project."
      },
      links: {
        repo: "https://github.com",
        url: "https://google.com"
      }
    },
  ]

  return (
    <Box backgroundColor="primary" as='section' id="projects">
      <Heading {...h3} py={10}>
        Recent Projects
      </Heading>
      <Box padding={5}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)"
          }}
          gap={20}
          placeItems="center"
          maxWidth={"1400px"}
          margin={"0 auto"}
        >
          {
            PROJECTS.map((props, key) => (
              <ProjectCard {...props} key={key}/>
            ))
          }
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;