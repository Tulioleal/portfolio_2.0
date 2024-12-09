import { Box, Button, Flex, FormControl, FormLabel, Input, Text, Textarea, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { h2 } from '../themes/components/heading_theme';
import CustomParagraph from '../components/CustomParagraph';
import { SectionProps } from '../[lng]/page';

const Contact = ({t}:SectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <Box
        p={8}
        mx="auto"     
        backgroundColor="primary"
        py={{
          base: "10",
          md: "20"
        }}
        pb={20}
        id='contact'
      >
        <Flex justifyContent='space-around' flexDir={{
          base: "column",
          md: "row"
        }}>
          <Text {...h2}           
            width={{
              base: "100%",
              md: "550px"
            }}
            as="h5"
            textAlign={"center"}
            pb={{
              base: "8",
              md: "0"
            }}
          >
            {t("contact-text.1")}
            <br />
            {t("contact-text.2")}
            <br />
            {t("contact-text.3")}
          </Text>
          <Box
            as="form"
            method='post'
            action="https://getform.io/f/6d2b6ff7-c15f-41c4-9a3e-890141963819"
            width={{
              base: "100%",
              md: "460px"
            }}
          >
            <VStack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>{t("name")}</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>{t("message")}</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </FormControl>
              <Button type="submit" variant="primary" size="md">
                {t("send")}
              </Button>
            </VStack>
          </Box>
        </Flex>
      </Box>
      <Box as='footer' py={7} px={1} backgroundColor="grey.default">
        <CustomParagraph
          width="100%"
          textAlign="center"
          color="blue.dark"
          fontWeight="semibold"
          letterSpacing="2px"
          fontSize={{
            base: "xs",
            "sm": "sm",
            md: "md"
          }}
        > {t("copyright", {year: new Date().getFullYear()})}
        </CustomParagraph>
      </Box>
    </>
  );
};

export default Contact;