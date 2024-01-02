import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors'
import { Button } from './components/button'
import { Form } from './components/form'
import { Heading } from './components/heading'
import { Input } from './components/input'
import { Menu } from './components/menu'
import { modalTheme } from './components/modal'
import { Progress } from './components/progress'
import { Select } from './components/select'
import { skeletonTheme } from './components/skeleton'
import { Switch } from './components/switch'
import { Text } from './components/text'
import { zIndices } from './zIndices'

const fonts = {
  heading: `'Helvetica Now Display', sans-serif`,
  body: `'Helvetica Now Text', sans-serif`,
}

const shadows = {
  xs: '0px 0px 3px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.08)',
  sm: '0px 0px 6px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.04)',
  md: '0px 3px 12px rgba(0, 0, 0, 0.08)',
  lg: '0px 8px 24px rgba(0, 0, 0, 0.08)',
  xl: '0px 8px 36px rgba(0, 0, 0, 0.08)',
  xxl: '0px 16px 64px rgba(0, 0, 0, 0.08)',
}

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: 'gray.5', // Set the background color of the body
      },
    }),
  },
  // breakpoints: {
  //   sm: '30em', // 480px
  //   md: '48em', // 768px
  //   lg: '62em', // 992px
  //   xl: '80em', // 1280px
  //   xxl: '96em', // 1536px
  //   xxxl: '2000px',
  // },
  zIndices,
  colors,
  fonts,
  shadows,
  components: {
    Modal: modalTheme,
    Skeleton: skeletonTheme,
    Heading,
    Button,
    Input,
    Form,
    Text,
    Select,
    Switch,
    Progress,
    Menu,
  },
})
