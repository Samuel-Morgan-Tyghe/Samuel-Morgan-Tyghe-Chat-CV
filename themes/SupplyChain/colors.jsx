/* primary colours */
const primary = {
  gray: {
    120: '#121921',
    100: '#28303A',
    80: '#535A61',
    60: '#7E8388',
    40: '#A9ACB0',
    20: '#D4D6D8',
    10: '#F4F5F5',
  },

  red: {
    100: '#D1364C',
    80: '#D7556E',
    60: '#DF7D92',
    40: '#E8A7B6',
    20: '#F3D3DA',
  },
}

/* secondary colours */
const secondary = {
  darkRed: {
    100: '#6E1F4D',
    80: '#894970',
    60: '#A57593',
    40: '#C3A2B8',
    20: '#E1D1DB',
  },
  purple: {
    100: '#8443D6',
    80: '#9B66DD',
    60: '#B48CE5',
    40: '#CCB1ED',
    20: '#E6D8F6',
  },
  darkBlue: {
    100: '#3D53C7',
    80: '#6474D1',
    60: '#8A97DC',
    40: '#B2BAE7',
    20: '#D9DCF3',
  },
  blue: {
    100: '#5BA8DB',
    80: '#78B9E2',
    60: '#97C9E8',
    40: '#BADCF1',
    20: '#DCEDF8',
  },
  aqua: {
    100: '#67DFBA',
    80: '#72E5C7',
    60: '#8BEBD5',
    40: '#ADF2E2',
    20: '#D5F8F1',
  },
  green: {
    100: '#65AC65',
    80: '#81BC83',
    60: '#9ECCA1',
    40: '#BEDEC0',
    20: '#DEEEDF',
    10: '#65AC651A',
  },
  yellow: {
    100: '#F8CD46',
    80: '#F8D757',
    60: '#FAE079',
    40: '#FCEBA3',
    20: '#FDF4D0',
  },
  orange: {
    100: '#ED6F43',
    80: '#EF8A65',
    60: '#F2A68B',
    40: '#F6C4B0',
    20: '#FAE1D8',
  },
}

export const colors = { ...primary, ...secondary }
