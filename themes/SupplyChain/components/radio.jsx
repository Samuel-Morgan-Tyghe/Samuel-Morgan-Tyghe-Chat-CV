/* radio */

export const Radio = {
  baseStyle: {
    control: {
      outline: '2px solid black',
    },
  },
  defaultProps: {
    colorScheme: 'none',
  },
  variants: {
    customBlack: {
      control: {
        _checked: {
          bg: 'black',
          borderColor: 'black',
          color: 'white',
        },
      },
    },
  },
}
