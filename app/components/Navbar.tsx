import React from 'react';
import { Box, Flex, Button} from '@chakra-ui/react';
import ToggleModeButton from './ToggleModeButton';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/public/logo.png"
import LangSelect from './LangSelect';
import CustomDrawer from './Drawer';

const Navbar: React.FC = () => (
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
      alignItems={'center'}
      alignContent={"center"}
    >
      <Box>
        <Link href="/">
          <Image src={Logo} alt="Logo" height={80} width={80} />
        </Link>
      </Box>
      <Flex
        alignItems={'center'}
        gap={6}
        display={{ base: 'none', md: 'flex' }}
      >
        <Link href="#about">
          <Button variant="primary">About</Button>
        </Link>
        <Link href="#projects">
          <Button variant="primary">Projects</Button>
        </Link>
        <Link href="#contact">
          <Button variant="primary">Contact</Button>
        </Link>
        <Link href="/resume" target='_blank'>
          <Button variant="primary">Resume</Button>
        </Link>
      </Flex>
      <Flex alignItems={'center'} gap={4}>
        <ToggleModeButton />
        <CustomDrawer />
        <LangSelect/>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;