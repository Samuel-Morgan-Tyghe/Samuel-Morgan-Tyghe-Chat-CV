import { type ComponentStyleConfig } from "@chakra-ui/react";
import { merge } from "lodash";

import { inputs } from "../inputs";

export const Input: ComponentStyleConfig = merge({}, inputs, {
  baseStyle: {
    field: {
      _placeholder: {
        color: "secondary.blue.80",
        fontWeight: 325,
      },
    },
  },
} as ComponentStyleConfig);
