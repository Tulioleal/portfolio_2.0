import { Box, Grid, Heading } from '@chakra-ui/react';
import { h3 } from '../themes/components/heading_theme';
import ProjectCard, { Project } from '../components/ProjectCard';
import CS_courses from '@/public/CS_courses.png';
import CS_olympiad from '@/public/CS_olympiad.png';
import CS_website from '@/public/CS_website.png';
import Nggamdu from '@/public/Nggamdu.png';
import { SectionProps } from '../[lng]/page';


const PROJECTS:Project[] = [
  {
    title: "cs-courses",
    description: "",
    image: {
      src: CS_courses,
      alt: "ClimateScience Courses screenshot."
    },
    links: {
      url: "https://climatescience.org/new-courses"
    }
  },
  {
    title: "cs-olympiad",
    description: "",
    image: {
      src: CS_olympiad,
      alt: "ClimateScience Olympiad screenshot."
    },
    links: {
      url: "https://climatescience.org/olympiad"
    }
  },
  {
    title: "cs-website",
    description: "",
    image: {
      src: CS_website,
      alt: "ClimateScience Website screenshot."
    },
    links: {
      url: "https://climatescience.org/"
    }
  },
  {
    title: "nggamdu",
    description: "",
    image: {
      src: Nggamdu,
      alt: "Nggamdu screenshot."
    },
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
        gap={20}
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
                src: props.image.src,
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