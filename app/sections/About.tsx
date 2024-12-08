import { Box, Text, Stack, useColorMode } from '@chakra-ui/react';
import { p } from '../themes/text_theme';

const About = () => {
  const { colorMode } = useColorMode();
  const SIZES = ["18px", "20px", "20px", "22px", "22px", "22px", "24px"]

  return (
    <Box
      as="section"
      display={"block"}
      border={"none"}
      w="100%"
      p={5}
      py={20}
      background={ colorMode === 'light' ? "grey.light" : "blue.default" }
    >
      <Stack spacing={4} maxW={
        ["90%", "90%", "90%", "900px", "900px"]
        
      } mx="auto">
        <Text 
          {...p}
          fontSize={SIZES}
        >
          I'm a Venezuelan Software Engineer living in Buenos Aires since 2019, in early 2020 my journey as a web developer began, from that day on, i've never stopped learning.
        </Text>
        <Text {...p} fontSize={SIZES}>
          I love simple, clean and effective UI.
        </Text>
        <Text  {...p} fontSize={SIZES}>
          Started learning about HTML, CSS and Javascript out of curiosity a and way to enter in the job market, but I discovered my passion in Web development.
        </Text>
      </Stack>
    </Box>
  );
};

export default About;