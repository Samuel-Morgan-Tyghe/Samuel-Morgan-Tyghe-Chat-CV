import { type ComponentStyleConfig } from "@chakra-ui/react";

import { pxToRem } from "../../../src/Utils/pxToRem";

export const FormError: ComponentStyleConfig = {
  baseStyle: {
    text: {
      fontFamily: "heading",
      fontSize: pxToRem(14),
      fontWeight: 350,
    },
  },
};
