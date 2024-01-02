import { formAnatomy } from '@chakra-ui/anatomy'

const activeLabelStyles = {
  transform: 'translateY(-18px) translateX(8px)',
  color: 'black',
  top: '28px', // random offset applies otherwise it would be 12px
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: 500,
}

export const Form = {
  parts: formAnatomy.keys,
  baseStyle: {},
  variants: {
    floating: {
      container: {
        // You're ready to type in the input field
        'input:focus, .chakra-select__wrapper + label[data-focus]': {
          paddingBottom: '12px',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '24px',
        },
        'input:focus + label, .chakra-select__wrapper + label[data-focus]': {
          ...activeLabelStyles,
        },
        // If there's text in the field
        'input:not(:placeholder-shown) + label, label.hasValue': {
          ...activeLabelStyles,
        },
        // If there's text in the field but you're not focused on it
        'input:not(:placeholder-shown):not(:focus) + label,  label.hasValue': {
          color: 'gray.40',
          paddingBottom: '12px',
        },
        // If there's text in the field
        'input:not(:placeholder-shown), select.hasValue': {
          paddingBottom: '12px',
        },
        label: {
          top: '0px', // Based off 64px default height of input
          left: '12px',
          zIndex: 0,
          position: 'absolute',
          color: 'gray.40',

          fontSize: '16px',
          lineHeight: '64px',
          m: 0,
          p: 0,
          letterSpacing: '0.01em',
        },
      },
    },
  },
}
