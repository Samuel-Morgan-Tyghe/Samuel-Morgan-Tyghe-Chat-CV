import { type ComponentStyleConfig } from "@chakra-ui/react";

import { pxToRem } from "../../../src/Utils/pxToRem";

export const FormLabel: ComponentStyleConfig = {
  baseStyle: {
    color: "inherit",
    fontSize: pxToRem(14),
    fontFamily: "heading",
    fontWeight: "400",
    lineHeight: pxToRem(16),
    marginBottom: "12px",
  },

  variants: {
    light: {
      color: "#ffffff",
    },
  },
};
