import { Button, extendTheme, Select, type ThemeConfig } from '@chakra-ui/react'
import { switchTheme } from './switch_theme'
import { buttonTheme } from './button_theme'
import { selectTheme } from './select_theme'
const customTheme = extendTheme({
  initialColorMode: 'dark',
  components: {
    Switch: switchTheme,
    Button: buttonTheme,
    Select: selectTheme
  },
  colors: {
    "blue": {
      "light": "#30475e",
      "default": "#222831",
      "dark": "#1a202c",
    },
    "grey": {
      "light": "#F3F3F3",
      "default": "#636D7D",
      "dark": "#404040",
      "transparent": "#2228313d",
    },
    "yellow": {
      "light": "#FFDF64",
      "default": "#FFD369",
      "dark": "#FFC048",
    },
    "brown": {
      "light": "#B08D57",
      "default": "#9C7950",
      "dark": "#8A5F2D",
    },
  },
  semanticTokens: {
    colors: {
      primary: {
        default: 'grey.light',
        _dark: 'blue.default',
      },
      secondary: {
        default: 'grey.default',
      },
      accent: {
        default: 'brown.default',
        _dark: 'yellow.default',
      },
      text: {
        default: 'blue.default',
        _dark: 'grey.light',
      }
    },
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
  },
})

export default customTheme