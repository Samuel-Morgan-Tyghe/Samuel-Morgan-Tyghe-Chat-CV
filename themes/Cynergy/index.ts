import { extendTheme } from "@chakra-ui/react";

import { pxToRem } from "../../src/Utils/pxToRem";
import { breakpoints } from "./breakpoints";
import { colours } from "./colors";
import { Accordion } from "./components/Accordion";
import { Breadcrumb } from "./components/Breadcrumb";
import { Button } from "./components/Button";
import { Form } from "./components/Form";
import { FormError } from "./components/FormError";
import { FormLabel } from "./components/FormLabel";
import { Heading } from "./components/Header";
import { Input } from "./components/Input";
import { Menu } from "./components/Menu";
import { Progress } from "./components/Progress";
import { Radio } from "./components/Radio";
import { Select } from "./components/Select";
import { Slider } from "./components/Slider";
import { Table } from "./components/Table";
import { Tabs } from "./components/Tabs";
import { Text } from "./components/Text";
import { fontWeights, fonts } from "./typography";

/* here is where we apply our theme 🚀 */
export const theme = extendTheme({
  colors: colours,
  shadows: {
    custom: "0px 5px 12px 0px rgba(0, 107, 146, 0.12)",
    customHover: "0px 5px 12px 0px rgba(0, 107, 146, 0.42)",
    light: "0 0 0 4px rgba(255, 255, 255, 0.6)",
    outline: "0 0 0 4px #003D4D",
    bright: "0 0 0 4px #00D1B6",
  },
  breakpoints,
  fonts,
  fontWeights,
  components: {
    Heading,
    Button,
    Progress,
    Text,
    Accordion,
    FormLabel,
    Input,
    Form,
    FormError,
    Select,
    Slider,
    Radio,
    Tabs,
    Table,
    Breadcrumb,
    Menu,
  },
});
