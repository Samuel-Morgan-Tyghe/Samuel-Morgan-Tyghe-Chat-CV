import { merge } from 'lodash'

import { theme } from '.'

export const purpleTheme = merge({}, theme, {
  components: {
    Button: {
      variants: {
        primary: {
          color: 'white',
        },
        primarySmall: {
          color: 'white',
        },
        secondary: {
          color: 'white',
        },
        secondarySmall: {
          color: 'white',
        },
        image: {
          color: 'white',
        },
        outline: {
          color: 'white',
        },
        card: {
          color: 'white',
        },
      },
    },
    Text: {
      variants: {
        footerLink: {
          color: 'white',
        },
      },
    },
    Heading: {
      variants: {
        subheading: {
          color: 'white',
        },
      },
    },
  },
  colors: {
    primary: {
      teal: {
        100: '#1D1E3C',
        80: '#2E3161',
        60: '#6a6ee2',
        40: '#a1a1e2',
        30: '#7F80AF',
        15: '#A1A3CC',
        10: '#B5B7D9',
        5: '#D1D3EB',
      },
      darkGreen: {
        100: '#2E3161',
        80: '#4A4C86',
        60: '#66689B',
        40: '#7F80AF',
        20: '#A1A3CC',
        15: '#B5B7D9',
        10: '#D1D3EB',
      },
    },
  },
})
