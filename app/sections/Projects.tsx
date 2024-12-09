import { Box, Grid, Heading } from '@chakra-ui/react';
import { h3 } from '../themes/components/heading_theme';
import ProjectCard, { Project, ProjectRaw } from '../components/ProjectCard';
import CS_courses from '@/public/CS_courses.png';
import CS_olympiad from '@/public/CS_olympiad.png';
import CS_website from '@/public/CS_website.png';
import Nggamdu from '@/public/Nggamdu.png';
import { SectionProps } from '../[lng]/page';


const PROJECTS:ProjectRaw[] = [
  {
    title: "cs-courses",
    image: CS_courses,
    links: {
      url: "https://climatescience.org/new-courses"
    }
  },
  {
    title: "cs-olympiad",
    image: CS_olympiad,
    links: {
      url: "https://climatescience.org/olympiad"
    }
  },
  {
    title: "cs-website",
    image: CS_website,
    links: {
      url: "https://climatescience.org/"
    }
  },
  {
    title: "nggamdu",
    image: Nggamdu,
    links: {
      url: "https://google.com"
    }
  },
]

const Projects = ({t}:SectionProps) => (
  <Box
    as='section'
    id="projects"
    backgroundColor="primary"
    py={{
      base: "10",
      md: "20"
    }}>
    <Heading {...h3} pb={10}>
      Recent Projects
    </Heading>
    <Box padding={5}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)"
        }}
        gap={{
          base: "5",
          sm: "10",
          md: "10",
        }}
        placeItems="center"
        maxWidth={"1400px"}
        margin={"0 auto"}
      >
        {
          PROJECTS.map((props, key) => (
            <ProjectCard 
              key={key}
              title={t(`projects-content.${props.title}.title`)}
              description={t(`projects-content.${props.title}.description`)}
              image={{
                src: props.image,
                alt: t(`projects-content.${props.title}.title`) + " screenshot"
              }}
              links={props.links} 
            />
          ))
        }
      </Grid>
    </Box>
  </Box>
);

export default Projects;