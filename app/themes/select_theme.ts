import { selectAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys)

const baseStyle = definePartsStyle({
  icon: {
    color: 'brown.default',
    _dark: {
      color: 'grey.default',
    }
  },
  field: {
    background: 'grey.light',
    color: 'brown.default',
    borderColor: 'brown.default',
    borderWidth: '1px',
    _active: {
      background: 'brown.default',
      color: 'brown.default',
    },
    _dark: {
      background: 'grey.light',
      color: 'grey.default',
      borderColor: 'grey.default',
      borderWidth: '1px',
      iconColor: 'grey.dark',
    }
  }
})

export const selectTheme = defineMultiStyleConfig({ baseStyle })