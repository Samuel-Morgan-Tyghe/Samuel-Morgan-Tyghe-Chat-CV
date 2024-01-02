import { type ComponentStyleConfig } from '@chakra-ui/react'

export const Breadcrumb: ComponentStyleConfig = {
  baseStyle: {
    link: {
      _focusVisible: {
        boxShadow: 'outline',
        outline: '2px solid white',
      },
    },
  },
}
