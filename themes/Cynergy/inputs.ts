import { ComponentStyleConfig } from "@chakra-ui/react";

import { pxToRem } from "../../src/Utils/pxToRem";

export const inputs: ComponentStyleConfig = {
  baseStyle: {
    field: {
      borderRadius: pxToRem(2.4),
      borderWidth: "1px",
      borderColor: "#ffffff",
      borderStyle: "solid",
      height: pxToRem(60),
      fontSize: pxToRem(14),
      fontWeight: 350,
      lineHeight: pxToRem(16),
      fontFamily: "heading",
      color: "inherit",
      paddingStart: pxToRem(16),
      paddingY: pxToRem(16),

      _focus: {
        boxShadow: "bright !important",
      },
    },
  },

  variants: {
    light: {
      field: {
        background: "transparent",
        color: "#ffffff",
      },
    },
  },
};
