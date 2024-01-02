/* button */

export const Button = {
  baseStyle: {
    fontFamily: `'Helvetica Now Display', sans-serif`,
    fontWeight: '800',
  },
  sizes: {
    lg: {
      fontSize: '17px',
      lineHeight: '24px',
    },
    md: {
      fontSize: '17px',
      lineHeight: '24px',
      px: '20px',
      py: '16px',
    },
    sm: {
      fontSize: '14px',
      lineHeight: '20px',
      px: '16px',
      py: '10px',
    },
    xs: {
      fontSize: '14px',
      lineHeight: '20px',
      px: '12px',
      py: '6px',
    },
  },
  variants: {
    primary: {
      h: '64px',
      px: '24px',
      py: '20px',
      borderRadius: '8px',
      border: '2px solid transparent',
      bg: 'navy.100',
      color: 'white',
      '&:hover': {
        bg: 'navy.80',
      },
      '&:active': {
        bg: 'navy.60',
      },
      '&:focus': {
        outline: 'none',
      },
      '&:disabled': {
        opacity: '70%',
      },
      '&:disabled:hover': {
        bg: 'navy.100',
      },
    },
    secondary: {
      h: '64px',
      px: '24px',
      py: '20px',
      borderRadius: '8px',
      bg: 'white',
      boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.04)',
      '&:hover': {
        bg: 'black.5',
      },
      '&:focus': {
        bg: 'black.10',
      },
      '&:disabled': {
        opacity: '70%',
      },
    },
    transparent: {
      px: '8px',
      py: '20px',
      borderRadius: '8px',
      bg: 'transparent',
      '&:hover': {
        bg: 'rgba(0, 0, 0, 0.04)',
      },
      '&:active': {
        bg: 'rgba(0, 0, 0, 0.1)',
      },
      '&:focus': {
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
    },
    icon: {
      p: 0,
      borderRadius: '8px',
      bg: 'transparent',
      '&:hover': {
        bg: 'rgba(0, 0, 0, 0.04)',
      },
      '&:active': {
        bg: 'rgba(0, 0, 0, 0.1)',
      },
      '&:focus': {
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
    },
    outlined: {
      h: '64px',
      px: '24px',
      py: '20px',
      borderRadius: '8px',
      border: '1.5px solid rgba(0, 0, 0, 0.1)',
      bg: 'linear-gradient(98.17deg, #FFFFFF 0%, #F7F7F7 99.79%)',
      '&:hover': {
        bg: 'rgba( 0, 0, 0, 0.1)',
      },
    },
    StartNow: {
      whiteSpace: 'pre-line',
      p: '20px 24px 20px 20px',
      h: '64px',
      fontWeight: '800',
      fontSize: '17px',
      bg: 'orange.50',
      border: '2px solid transparent',
      color: 'white',
      '&:hover': {
        bg: 'navy.80',
      },
      '&:active': {
        bg: 'navy.60',
      },
      '&:focus': {
        borderColor: '#6185F2',
      },
    },
    white: {
      h: '64px',
      px: '24px',
      py: '20px',
      borderRadius: '8px',
      bg: 'white',
      boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.04)',
      '&:hover': {
        bg: 'black.5',
      },
      '&:focus': {
        bg: 'black.10',
      },
      '&:disabled': {
        opacity: '70%',
      },
    },

    active: {
      bg: 'black.5',
      '&:hover': {
        bg: 'black.5',
      },
      '&:focus': {
        bg: 'black.10',
      },
      '&:disabled': {
        opacity: '70%',
      },
    },
    text: {
      '&:hover': {
        bg: 'black.5',
      },
      '&:focus': {
        bg: 'black.10',
      },
      '&:disabled': {
        opacity: '70%',
      },
    },
  },
}
