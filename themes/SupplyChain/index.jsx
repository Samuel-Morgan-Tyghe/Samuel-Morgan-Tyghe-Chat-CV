import { extendTheme } from '@chakra-ui/react'

/* branding */
import { colors } from './colors'

/* components */
import { Button } from './components/button'
import { Checkbox } from './components/checkbox'
import { Dashboard } from './components/dashboard'
import { Heading } from './components/heading'
import { Link } from './components/link'
import { modalTheme } from './components/modal'
import { Radio } from './components/radio'
import { Select } from './components/select'
import { skeletonTheme } from './components/skeleton'
import { Spinner } from './components/spinner'
import { Switch } from './components/switch'
import { Tag } from './components/tag'
import { Textarea } from './components/text-area'
import { Input } from './components/text-input'
import { fonts } from './typography'

/* here is where we apply our theme 🚀 */
export const theme = extendTheme({
  colors,
  fonts,
  components: {
    Modal: modalTheme,
    Skeleton: skeletonTheme,
    Button,
    Link,
    Input,
    Select,
    Heading,
    Tag,
    Textarea,
    Radio,
    Checkbox,
    Switch,
    Dashboard,
    Spinner,
  },
})
