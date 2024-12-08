import { Box, Text, useColorMode } from "@chakra-ui/react";

const LetteringBackground: React.FC = () => {
  const WORDS = "ENGINEER • DEVELOPER • CODER • ENGINEER • DEVELOPER • CODER •"
  const NUMBER_OF_LINES = 50;
  const { colorMode } = useColorMode();

  return (
    <Box
      background="transparent"
      lineHeight="1.5"
      position="absolute"
      zIndex={0}
      maxH="98.3vh"
      maxW="100%"
      pointerEvents="none"
    >
      <Box
        position="relative"
        overflow="hidden"
        maxW="100vw"
        maxH="100vh"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={1}
          maxW="100vw"
          background={
            colorMode === "light" ?
              "linear-gradient(to top, #F3F3F3ff, #ffffff00)" :
              "linear-gradient(to top, #222831ff, #ffffff00)"
          }
        />

      {
        Array.from({ length: NUMBER_OF_LINES }).map((_, index) => (
          <Text
            key={index}
            color="grey.transparent"
            fontSize={{
              base: "60px",
              md: "70px",
              lg: "80px",
            }}
            lineHeight={{
              base: "70px",
              md: "80px",
              lg: "90px",
            }}
            noOfLines={1}
            isTruncated
            ml={Math.floor(Math.random() * 500) * -1}
            fontWeight={900}
          > {WORDS}
          </Text>
        ))
      }
      </Box>
    </Box>
  );
};

export default LetteringBackground;