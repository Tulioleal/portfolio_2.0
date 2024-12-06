import { Box, Flex, Heading, Button } from '@chakra-ui/react';
import LetteringBackground from '../components/LetteringBackground';
import Image from 'next/image';
import Github from "@/public/Github.svg"
import LinkedIn from "@/public/LinkedIn.svg"

const Hero = () => {
  return (
    <Box
      as="header"
      bg="grey.default"
      color="white"
      height="100vh"
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
      >
        <Heading
          as="h1"
          color="yellow.default"
          width="100%"
          zIndex={5}
          fontSize={{
            base: "50px",
            sm: "70px",
            md: "80px",
            lg: "100px",
            xl: "120px",
          }}
        >
          TULIO LEAL
        </Heading>
        <Heading
          as="h2"
          color="yellow.default"
          width="100%"
          zIndex={5}
          fontSize={{
            base: "30px",
            sm: "40px",
            md: "50px",
            lg: "60px",
            xl: "70px",
          }}
        >
          WEB DEVELOPER
        </Heading>
        <Box
          zIndex={5}
          display={"flex"}
          justifyContent={"center"}
          gap={8}
          pt={8}
        >
          <Image
            src={Github}
            alt="Github"
            width={50}
            height={50}
          />
          <Image
            src={LinkedIn}
            alt="LinkedIn"
            width={50}
            height={50}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;