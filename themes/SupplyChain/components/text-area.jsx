/* text area */
import { Input } from './text-input'

export const Textarea = {
  variants: {
    default: ({ isOptional }) => ({
      ...Input.variants.default.field,
      fontStyle: isOptional && 'italic',
    }),
  },
  defaultProps: {
    variant: 'default',
  },
}
