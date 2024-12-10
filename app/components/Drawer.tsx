"use client"

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure
}
from "@chakra-ui/react"
import Link from "next/link"
import LangSelect from "./LangSelect"
import { HamburgerIcon } from "@chakra-ui/icons"

export default function CustomDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Button
        onClick={onOpen}
        display={{ base: 'flex', md: 'none' }}
        variant="primary"
      > <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="top"
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text as={"h2"} fontSize={"30px"} color="yellow.default">
              Tulio Leal
            </Text>
          </DrawerHeader>

          <DrawerBody pb={5}>
            <Flex flexDir="column" gap={6}>
              <LangSelect onMobile/>
              <LinkTab
                text="About"
                url="#about"
              />
              <LinkTab
                text="Projects"
                url="#projects"
              />
              <LinkTab
                text="Contact"
                url="#contact"
              />
              <LinkTab
                text="Resume"
                url="https://www.canva.com/design/DAGX9gZ31S0/BQalvj0XVe6SyNrTGSsUVg/view?utm_content=DAGX9gZ31S0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbe8208925c"
                targetBlank
              />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

const LinkTab = (
  {
    text,
    url,
    targetBlank
  } : {
    text:string,
    url:string,
    targetBlank?:boolean
  }
) => (
  <Link href={url} target={targetBlank == true ? "_blank" : ""}>
    <Text color="accent" width={"100%"} padding="2">
      {text}
    </Text>
  </Link>
)