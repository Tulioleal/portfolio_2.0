import { ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack } from '@chakra-ui/react';
import { h4 } from '../themes/components/heading_theme';
import Link from 'next/link';
import CustomParagraph from './CustomParagraph';

export interface Project {
  title: string;
  description: string;
  image: {
    src: string;
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
  <Card maxW='md'>
    <CardBody>
      <Link href={links.url}>
        <Image
          src={image.src}
          alt={image.alt}
          borderRadius='lg'
          width={430}
          height={285}
          aspectRatio={430 / 285}
        />
      </Link>
      <Stack mt='6' spacing='3'>
        <Heading {...h4} textAlign="left">
          {title}
        </Heading>
        <CustomParagraph textAlign="left">
          {description}
        </CustomParagraph>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter color="yellow.default">
      <ButtonGroup spacing='2'>
        {
          links.repo ?
            <Link href={links.repo}>
              Repo
            </Link> : <></>
        }
      </ButtonGroup>
    </CardFooter>
  </Card>
);

export default ProjectCard;