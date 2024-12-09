import React from 'react';
import { Box, Flex, Button} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/public/logo.png"
import LangSelect from './LangSelect';
import CustomDrawer from './Drawer';
import { SectionProps } from '../[lng]/page';


const Navbar =  ({t}:SectionProps) => (
  <Box
    as="nav"
    background="primary"
    py={2}
    px={{base:4, md: 0}}
    position="fixed"
    width="100%"
    zIndex={5}
  >
    <Flex
      justifyContent={{ base: 'space-between', md: 'space-around' }}
      alignItems='center'
      alignContent='center'
    >
      <Box>
        <Link href="/">
          <Image src={Logo} alt="Logo" height={80} width={80} />
        </Link>
      </Box>
      <Flex
        alignItems='center'
        gap={6}
        display={{ base: 'none', md: 'flex' }}
      >
        <Link href="#about">
          <Button variant="primary">
            {t("about")}
          </Button>
        </Link>
        <Link href="#projects">
          <Button variant="primary">
            {t("projects")}
          </Button>
        </Link>
        <Link href="#contact">
          <Button variant="primary">
            {t("contact")}
          </Button>
        </Link>
        <Link href="https://www.canva.com/design/DAGX9gZ31S0/BQalvj0XVe6SyNrTGSsUVg/view?utm_content=DAGX9gZ31S0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbe8208925c" target='_blank'>
          <Button variant="primary">
            {t("resume")}
          </Button>
        </Link>
      </Flex>
      <Flex alignItems='center' gap={4}>
        {/* <ToggleModeButton /> */}
        <CustomDrawer />
        <LangSelect/>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;