import { Box, Text, Stack, useColorMode } from '@chakra-ui/react';
import CustomParagraph from '../components/CustomParagraph';

const About = () => {
  const { colorMode } = useColorMode();
  const SIZES = ["18px", "20px", "20px", "22px", "22px", "22px", "24px"]

  return (
    <Box
      as="section"
      id="about"
      display={"block"}
      border={"none"}
      w="100%"
      overflow={"hidden"}
      pt={"100px"}
      pb="150px"
      background={ colorMode === 'light' ? "grey.light" : "blue.default" }
    >
      <Stack
        spacing={4}
        mx="auto"
        maxW={["90%", "90%", "90%", "900px", "900px"]}
        >
        <CustomParagraph >
          I&apos;m a Venezuelan Software Engineer living in Buenos Aires since 2019, in early 2020 my journey as a web developer began, from that day on, i&apos;ve never stopped learning.
        </CustomParagraph>
        <CustomParagraph>
          I love simple, clean and effective UI.
        </CustomParagraph>
        <CustomParagraph>
          Started learning about HTML, CSS and Javascript out of curiosity a and way to enter in the job market, but I discovered my passion in Web development.
        </CustomParagraph>
      </Stack>
    </Box>
  );
};

export default About;