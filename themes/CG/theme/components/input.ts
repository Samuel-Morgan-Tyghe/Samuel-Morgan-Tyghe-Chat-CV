/* text input */

export const Input = {
  baseStyle: {
    fontFeatureSettings:
      '"ss07" on, "ss02" on, "ss03" on, "ss04" on, "ss05" on, "ss06" on',
  },
  variants: {
    default: {
      field: {
        border: '1.5px solid',
        borderColor: 'gray.10',
        px: '20px',
        py: '22px',
        height: '64px',
        fontSize: '16px',
        lineHeight: '24px',
        backgroundColor: 'transparent',

        '&:focus': {
          border: '1.5px solid',
          borderColor: 'black',
        },
      },
    },
  },
  defaultProps: {
    variant: 'default',
  },
}
