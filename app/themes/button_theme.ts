import { buttonAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyleConfig } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(buttonAnatomy.keys)

const baseStyle = definePartsStyle({
  background: 'accent',
  color: 'grey.light',
  paddingY: "8px",
  paddingX: "16px",
  _hover: {
    background: 'brown.dark',
    color: 'grey.light',
  },
  _dark: {
    background: 'accent',
    color: 'blue.default',
    paddingY: "8px",
    paddingX: "16px",
    _hover: {
      background: 'yellow.dark',
      color: 'blue.default',
    },
  }
})

export const buttonTheme = defineStyleConfig({
  variants: { primary: baseStyle },
})