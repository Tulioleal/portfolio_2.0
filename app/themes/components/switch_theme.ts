import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

const baseStyle = definePartsStyle({
  thumb: {
    bg: 'primary',
  },
  track: {
    bg: 'grey.default',
    _checked: {
      bg: 'yellow.default',
    },
  },
})

export const switchTheme = defineMultiStyleConfig({ baseStyle })