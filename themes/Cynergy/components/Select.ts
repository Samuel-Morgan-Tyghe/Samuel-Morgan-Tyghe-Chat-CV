import { type ComponentStyleConfig } from '@chakra-ui/react'
import { merge } from 'lodash'

import { inputs } from '../inputs'

export const Select: ComponentStyleConfig = merge({}, inputs, {
  baseStyle: {
    icon: {
      color: 'primary.darkGreen.100',
    },
    field: {
      _focus: {
        boxShadow: 'bright !important',
      },
    },
  },
  variants: {
    light: {
      icon: {
        color: '#ffffff',
      },
    },
  },
} as ComponentStyleConfig)
