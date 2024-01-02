const defaultConfig = {
  transitionDuration: '0.25s',
  transitionTimingFunction: 'ease-in-out',
  transitionDelay: '0.01s',
}

export const defaultTransition = {
  transitionProperty: 'background-color,color',
  ...defaultConfig,
}
export const bgTransition = {
  transitionProperty: 'background-color',
  ...defaultConfig,
}
export const colorTransition = {
  transitionProperty: 'color',
  ...defaultConfig,
}
export const fillTransition = {
  transitionProperty: 'fill',
  ...defaultConfig,
}
