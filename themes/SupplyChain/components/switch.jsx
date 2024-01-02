/* switch */

export const Switch = {
  baseStyle: {
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    thumb: {
      width: '18px',
      height: '18px',
      bg: 'gray.20',
      _checked: {
        bg: 'white',
        transform: 'translateX(22px)', // total width of track - thumb width 🧠
      },
    },
    track: {
      width: '40px',
      height: '18px',
      bg: 'white',
      borderWidth: '1px',
      borderColor: 'gray.20',
      padding: 0,
      _checked: {
        bg: 'green.100',
        borderWidth: '1px',
        borderColor: 'green.100',
      },
    },
  },
  variants: {
    primary: {},
    marked_neutral: {
      track: {
        _checked: {
          bg: 'blue.100',
        },
        bg: 'blue.80',
      },
    },
    marked_add: {
      track: {
        bg: 'green.100',
      },
    },
    marked_delete: {
      track: {
        bg: 'red.100',
      },
    },
  },
}
