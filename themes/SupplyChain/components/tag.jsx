/* button 🔘 */
import { defaultTransition, fillTransition } from '../consts'

export const Tag = {
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
      fontSize: '24px',
      px: '24px',
      py: '12px',
    },
  },
  variants: {
    primary: {
      container: {
        bg: 'green.20',
        color: 'green.100',
        padding: '6px 8px 6px 8px',
        borderRadius: '4px',
      },
      label: {
        color: 'green.100',
        fontWeight: 'bold',
        fontSize: '12px',
      },
    },
  },
}
