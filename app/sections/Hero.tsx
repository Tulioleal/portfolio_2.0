import { Box, Flex, Heading } from '@chakra-ui/react';
import LetteringBackground from '../components/LetteringBackground';
import { h1, h2 } from '../themes/text_theme';
import { ImGithub } from "@react-icons/all-files/im/ImGithub";
import { ImLinkedin } from "@react-icons/all-files/im/ImLinkedin";
import Link from 'next/link';

const Hero = () => {
  return (
    <Box
      as="header"
      bg="grey.default"
      color="white"
      height="100vh"
      maxW="100vw"
      position="relative"
    >
      <LetteringBackground/>
      <Flex
        mx="auto"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        flexDir="column"
        height="100%"
        maxW="100vw"
      >
        <Heading {...h1} zIndex={2}>
          TULIO LEAL
        </Heading>
        <Heading {...h2} zIndex={2}>
          WEB DEVELOPER
        </Heading>
        <Box
          zIndex={2}
          display="flex"
          justifyContent="center"
          gap={8}
          pt={8}
        >
          <Link href="https://github.com/Tulioleal" target='_blank'>
            <ImGithub fontSize={"55px"} color='#ffd369'/>
          </Link>
          <Link href="https://www.linkedin.com/in/tulioleal/" target='_blank'>
            <ImLinkedin fontSize={"55px"} color='#ffd369'/>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;