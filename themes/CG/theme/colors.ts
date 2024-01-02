const status = {
  error: {
    100: '#39060D',
    75: '#BF0726',
    50: '#E51934',
    25: '#FE9A9D',
    10: '#FDEAED',
  },
  success: {
    100: '#0F2E0F',
    75: '#108028',
    50: '#3CB83C',
    25: '#BBE5B3',
    10: '#EDF9ED',
  },
  warning: {
    100: '#401E00',
    75: '#C05717',
    50: '#FFA600',
    25: '#FFC98B',
    10: '#FFF2E6',
  },
  info: {
    100: '#052447',
    75: '#08458A',
    50: '#0070E0',
    25: '#B6D9FC',
    10: '#EBF4FD',
  },
}

const primary = {
  navy: {
    120: '#0F15260A',
    100: '#0F1526',
    80: '#2E3B4D',
    60: '#475466',
    40: '#707b89',
    20: '#f3f9ff',
  },
  neutral: {
    975: '#141414',
    550: '#717175',
  },
}

const secondary = {
  black: {
    100: '#000',
    80: '#3A3A3C',
    60: '#636366',
    40: '#AEAEB2',
    20: '#D6D6DB',
    10: '#E5E5E5',
    5: '#f6f6f6',
  },
  gray: {
    80: '#3A3A3C',
    60: '#636366',
    40: '#AEAEB2',
    20: '#D6D6DB',
    10: '#E5E5EA',
    5: '#F5F6F7',
  },
}

const misc = {
  basicBlack: {
    50: 'rgba(0, 0, 0, 0.1)',
    40: 'rgba(0, 0, 0, 0.4)',
  },
  orange: {
    50: '#F65A00',
    25: '#FF1818',
  },
}

export const colors = { ...status, ...secondary, ...primary, ...misc }
