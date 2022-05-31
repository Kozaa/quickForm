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
    brand: '#718096',
    toneDownText: '#718096'

  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white','background')(props),
      }
    })
  },

});

export default theme;
