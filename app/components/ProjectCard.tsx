import { Card, CardBody, CardFooter, CardHeader, Divider, Heading, Stack } from '@chakra-ui/react';
import { h4 } from '../themes/components/heading_theme';
import Link from 'next/link';
import CustomParagraph from './CustomParagraph';
import Image, { StaticImageData } from 'next/image';

export interface Project {
  title: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  links: {
    repo?: string;
    url: string;
  };
}

const ProjectCard = ({
  title,
  description,
  image,
  links
}:Project) => (
  <Link href={links.url} target='_blank'>
    <Card maxW='md' h={{
      "base": "fit-content",
      "md": "550px",
      "lg": "650px",
    }} boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
      <CardHeader>
        <Image
          src={image.src}
          alt={image.alt}
        />
      </CardHeader>
      <CardBody>
        <Stack spacing='3'>
          <Heading {...h4} textAlign="left">
            {title}
          </Heading>
          <CustomParagraph textAlign="left">
            {description}
          </CustomParagraph>
        </Stack>
      </CardBody>
      {
        links.repo != undefined ?
        <>
            <Divider />
            <CardFooter color="yellow.default">
              <Link href={links.repo} target='_blank'>
                Repo
              </Link>
            </CardFooter>
          </> :
          <></>
        }
    </Card>
  </Link>
);

export default ProjectCard;