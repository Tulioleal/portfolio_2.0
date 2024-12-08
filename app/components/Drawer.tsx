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
import { useRef } from "react"
import LangSelect from "./LangSelect"
import { HamburgerIcon } from "@chakra-ui/icons"

export default function CustomDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<any>(null)

  return (
    <Box>
      <Button
        ref={btnRef}
        onClick={onOpen}
        display={{ base: 'flex', md: 'none' }}
        variant="primary"
      > <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement="top"
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text as={"h2"} fontSize={"30px"}>
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
                url="/resume"
              />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

const LinkTab = ({text, url}:{text:string, url:string}) => (
  <Link href={url}>
    <Text color="accent" width={"100%"} padding="2">
      {text}
    </Text>
  </Link>
)