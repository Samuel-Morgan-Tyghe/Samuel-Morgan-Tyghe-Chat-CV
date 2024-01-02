/* select component */
import { Input } from './text-input'

export const Select = {
  variants: {
    default: {
      field: {
        ...Input.variants.default.field,
        py: 0,
      },
    },
  },
  defaultProps: {
    variant: 'default',
  },
}
