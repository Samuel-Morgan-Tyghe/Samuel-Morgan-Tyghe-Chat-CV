/* text input */

export const Input = {
  variants: {
    default: {
      field: {
        border: '1px solid',
        borderColor: 'gray.20',
        px: '12px',
        py: '12px',
      },
    },
    searchInput: {
      field: {
        border: '1px solid',
        borderRadius: '8px',
        bg: 'gray.10',
        padding: '',
        borderColor: 'transparent',
        _placeholder: {
          color: 'gray.60',
        },
      },
    },
  },
  defaultProps: {
    variant: 'default',
  },
}
