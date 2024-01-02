/* button 🔘 */
import { defaultTransition, fillTransition } from '../consts'

export const Button = {
  baseStyle: {
    fontFamily: 'poppins',
    ...defaultTransition,
    Svg: {
      path: {
        ...fillTransition,
      },
    },
  },
  sizes: {
    md: {
      fontSize: '14px',
      px: '24px',
      py: '12px',
    },
  },
  variants: {
    primary: {
      bg: 'green.100',
      color: 'white',
      border: '2px solid',
      borderColor: 'green.100',
      '&:focus': {
        bg: 'green.60',
        color: 'white',
      },
      '&:hover': {
        bg: 'green.80',
        color: 'white',
      },
      '&:active': {
        bg: 'green.60',
        color: 'white',
      },
      '&:disabled': {
        bg: 'rgba(38, 48, 59, 0.6)',
        color: 'gray.40',
      },
    },

    danger: {
      bg: 'red.100',
      color: 'black',
      '&:focus': {
        bg: 'red.60',
      },
    },
    destructive: {
      bg: 'white',
      width: 'min-content',
      textDecoration: 'underline',
      color: 'red.100',
      '&:hover': {
        boxShadow: 'lg',
      },
      '&:focus': {
        bg: 'gray.20',
      },
      '&:disabled': {
        opacity: '70%',
      },
    },
    secondary: {
      border: '2px solid',
      borderColor: 'gray.100',
      '&:hover': {
        bg: 'gray.100',
        color: 'white',
        fill: 'white',
      },
      // '&:disabled': {
      //   bg: 'rgba(38, 48, 59, 0.6)',
      //   color: 'gray.40',
      //   svg: {
      //     fill: 'white',
      //     color: 'white',
      //     path: { fill: 'white', color: 'white' },
      //   },
      // },
    },
    secondary_green: {
      border: '2px solid',
      borderColor: 'green.100',
      color: 'green.100',

      '&:hover': {
        bg: 'green.80',
        color: 'white',
        svg: {
          fill: 'white',
          color: 'white',
          path: { fill: 'white', color: 'white' },
        },
      },
      '&:active': {
        bg: 'green.60',
        color: 'white',
        svg: {
          fill: 'white',
          color: 'white',
          path: { fill: 'white', color: 'white' },
        },
      },
      '&:disabled': {
        bg: 'rgba(38, 48, 59, 0.6)',
        color: 'gray.40',
        svg: {
          fill: 'white',
          color: 'white',
          path: { fill: 'white', color: 'white' },
        },
      },
    },
    tertiary: {
      border: '2px solid',
      borderColor: 'green.100',
      color: 'green.100',
      '&:hover': {
        bg: 'green.100',
        color: 'white',
        fill: 'white',
        svg: {
          fill: 'white',
          color: 'white',
          path: { fill: 'white', color: 'white' },
        },
      },
    },
    tertiary_delete: {
      border: '2px solid',
      borderColor: 'red.100',
      color: 'red.100',
      '&:hover': {
        bg: 'red.100',
        color: 'white',
        svg: {
          fill: 'red',
          color: 'red',
          path: { fill: 'white', color: 'red.100' },
        },
        '&:disabled': {
          bg: 'red.100',
          color: 'white',
          fill: 'white',
          svg: {
            fill: 'white',
            color: 'white',
            path: { fill: 'white', color: 'white' },
          },
        },
      },
      '&:disabled': {
        opacity: '70%',
      },
    },
    quinary_delete: {
      textDecoration: 'underline',
      border: 'none',
      display: 'flex',
      gap: '8px',
      px: '12px',
      color: 'red.80',
      fontWeight: 600,
      fontSize: '14px',
      svg: {
        w: '16px',
        h: '16px',
        fill: 'red.100',
        color: 'red.100',
        path: { fill: 'red.100', color: 'red.100' },
      },
      '&:hover': {
        bg: 'red.100',
        color: 'white',
        fill: 'white',
        svg: {
          fill: 'white',
          color: 'white',
          path: { fill: 'white', color: 'white' },
        },
      },
    },
    quinary_text: {
      textDecoration: 'underline',
      border: 'none',
      display: 'flex',
      gap: '8px',
      px: '12px',
      color: 'gray.80',
      fontWeight: 600,
      fontSize: '14px',
      svg: {
        w: '16px',
        h: '16px',
        fill: 'gray.80',
        color: 'gray.80',
        path: { fill: 'gray.80', color: 'gray.80' },
      },
      '&:hover': {
        bg: 'green.100',
        color: 'white',
        fill: 'white',
        svg: {
          fill: 'white',
          color: 'white',
          path: { fill: 'white', color: 'white' },
        },
      },
    },
    quaternary: {
      bg: 'green.100',

      color: 'white',
      fill: 'white',
      svg: {
        w: '24px',
        h: '24px',
        minW: '24px',
        p: '0',
        py: '0',
        px: '0',
        fill: 'white',
        color: 'white',
        path: { fill: 'white', color: 'white' },
      },
      '&:hover': {
        bg: 'green.60',
        color: 'white',
        fill: 'white',
        svg: {
          fill: 'white',
          color: 'white',
          path: { fill: 'white', color: 'white' },
        },
        '&:disabled': {
          bg: 'green.60',
          color: 'white',
          fill: 'white',
          svg: {
            fill: 'white',
            color: 'white',
            path: { fill: 'white', color: 'white' },
          },
        },
      },
      '&:focus': {
        bg: 'green.60',
        color: 'white',
        fill: 'white',
        svg: {
          fill: 'white',
          color: 'white',
          path: { fill: 'white', color: 'white' },
        },
      },
      '&:disabled': {
        bg: 'green.60',
        color: 'white',
        fill: 'white',
        svg: {
          fill: 'white',
          color: 'white',
          path: { fill: 'white', color: 'white' },
        },
      },
    },
    quinary: {
      border: 'none',
      display: 'flex',
      gap: '8px',
      px: '12px',
      color: 'green.100',
      fontWeight: 600,
      fontSize: '14px',
      svg: {
        w: '16px',
        h: '16px',
        fill: 'green.100',
        color: 'green.100',
        path: { fill: 'green.100', color: 'green.100' },
      },
      '&:hover': {
        bg: 'green.100',
        color: 'white',
        fill: 'white',
        svg: {
          fill: 'white',
          color: 'white',
          path: { fill: 'white', color: 'white' },
        },
      },
    },
    secondary_icon: {
      border: 'none',
      display: 'flex',
      gap: '8px',

      color: 'gray.20',
      bg: 'white',
      w: '24px',
      h: '24px',
      minW: '24px',
      p: '0',
      py: '0',
      px: '0',
      svg: {
        w: '14px',
        h: '14px',
        fill: 'gray.20',
        color: 'gray.20',
        path: { fill: 'gray.20', color: 'gray.20' },
      },
      '&:hover': {
        bg: 'gray.20',
        color: 'white',
        fill: 'white',
        svg: {
          fill: 'white',
          color: 'white',
          path: { fill: 'white', color: 'white' },
        },
      },
    },
    tertiary_icon: {
      color: 'gray.100',
      bg: 'white',
      border: '2px solid',
      borderColor: 'gray.100',
      p: '0',
      py: '0',
      px: '0',
      svg: {
        fill: 'gray.100',
        color: 'gray.100',
        path: { fill: 'gray.100', color: 'gray.100' },
      },
      '&:hover': {
        bg: 'green.100',
        borderColor: 'green.100',
        color: 'white',
        fill: 'white',
        svg: {
          fill: 'white',
          color: 'white',
          path: { fill: 'white', color: 'white' },
        },
      },
      '&:active': {
        bg: 'green.100',
        borderColor: 'green.100',
        color: 'white',
        fill: 'white',
        svg: {
          fill: 'white',
          color: 'white',
          path: { fill: 'white', color: 'white' },
        },
      },
      '&:focus': {
        bg: 'green.100',
        borderColor: 'green.100',
        color: 'white',
        fill: 'white',
        svg: {
          fill: 'white',
          color: 'white',
          path: { fill: 'white', color: 'white' },
        },
      },
    },
    table_control: {
      h: '32px',
      color: 'gray.100',
      bg: 'white',
      border: '1px solid',
      borderColor: 'gray.20',
      p: '4px 6px',
      alignItems: 'center',
      gap: '4px',
      display: 'flex',
      rounded: '4px',
      borderRadius: '4px',
      svg: {
        fill: 'gray.100',
        color: 'gray.100',
        path: { fill: 'gray.100', color: 'gray.100' },
      },
      '&:hover': {
        bg: 'gray.20',
        borderColor: 'gray.60',
      },
    },
    tertiary_icon_active: {
      border: '2px solid',
      p: '0',
      py: '0',
      px: '0',
      bg: 'green.100',
      borderColor: 'green.100',
      color: 'white',
      fill: 'white',
      svg: {
        fill: 'white',
        color: 'white',
        path: { fill: 'white', color: 'white' },
      },
    },
    cancel: {
      bg: 'gray.20',
      color: 'black',
      '&:focus': {
        bg: 'gray.10',
      },
    },
    icon: {
      border: '2px solid',
      borderColor: 'gray.100',
    },
    light_icon: {
      p: 0,
      '&:hover': {
        boxShadow: 'lg',
      },
      '&:focus': {
        bg: 'gray.20',
      },
      '&:disabled': {
        opacity: '70%',
      },
    },
    destructive_icon: {
      p: 0,
      '&:hover': {
        bg: 'red.20',
        boxShadow: 'lg',
      },
      '&:focus': {
        bg: 'gray.20',
      },
      '&:disabled': {
        opacity: '70%',
      },
    },
    text: {
      textDecoration: 'underline',
      '&:hover': {
        boxShadow: 'lg',
      },
      '&:focus': {
        bg: 'gray.20',
      },
      '&:disabled': {
        opacity: '70%',
      },
    },
    filter: {
      bg: 'white',
      px: '8px',
      py: '5.5px',
      boxShadow: 'md',
      '&:focus': {
        bg: 'gray.20',
      },
    },
  },
}
