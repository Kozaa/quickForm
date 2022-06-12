import { extendTheme, type ThemeConfig, theme as base } from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

const config: ThemeConfig = { initialColorMode: "dark",  useSystemColorMode: false, }

const theme = extendTheme({
  config,
  fonts: {
    heading: `Montserrat, ${base.fonts.heading}`,
    body: `Montserrat, ${base.fonts.body}`
  },
  colors: {
    background: '#0F1521',
    primary: '#4D92B9',
    secondary: '#D04193',
    accent: '#8E5BF2',
    brand: '#232B3D',
    toneDown: '#718096'

  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white','background')(props),
      }
    })
  },

  components: {
    Button: {
      variants: {
        hero: {
          bgGradient: 'linear(to-r, primary, secondary)',
          _hover: {
            bgGradient: 'linear(to-r, secondary,primary )',
          },

        }
      }
    }
  }

});

export default theme;
