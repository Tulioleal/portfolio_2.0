import { Box, Stack } from '@chakra-ui/react';
import {CustomParagraph} from '../components/index';
import { SectionProps } from '../[lng]/page';

const About = ({t}:SectionProps) => (
  <Box
    as="section"
    id="about"
    display={"block"}
    border={"none"}
    w="100%"
    overflow={"hidden"}
    py={{
      base: "10",
      md: "20"
    }}
    background="blue.default"
  >
    <Stack
      spacing={4}
      mx="auto"
      maxW={["90%", "90%", "90%", "900px", "900px"]}
      >
      <CustomParagraph >
        {t("about-text.1")}
      </CustomParagraph>
      <CustomParagraph>
        {t("about-text.2")}
      </CustomParagraph>
      <CustomParagraph>
        {t("about-text.3")}
      </CustomParagraph>
    </Stack>
  </Box>
);


export default About;