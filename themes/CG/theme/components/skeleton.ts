import { cssVar, defineStyleConfig } from '@chakra-ui/react'

const $startColor = cssVar('skeleton-start-color')
const $endColor = cssVar('skeleton-end-color')

export const skeletonTheme = defineStyleConfig({
  baseStyle: {
    borderRadius: 'lg',
    [$startColor.variable]: '#F2F2F7',
    [$endColor.variable]: '#8E8E93',
  },
})
