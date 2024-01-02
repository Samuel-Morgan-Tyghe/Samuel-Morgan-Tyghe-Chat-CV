/* checkbox */

export const Checkbox = {
  baseStyle: {
    control: {
      outline: '2px solid black',
      _checked: {
        bg: 'white',
      },
      _disabled: {
        bg: 'gray.20',
        border: 'none',
        outline: '2px solid',
        outlineColor: 'gray.20',
      },
    },
  },

  variants: {
    selectedGreen: {
      control: {
        _checked: {
          bg: 'gray.100',
          borderColor: 'gray.100',
          '& svg': {
            color: 'green.100',
          },
        },
      },
    },
  },
  defaultProps: {
    colorScheme: 'none',
  },
}
