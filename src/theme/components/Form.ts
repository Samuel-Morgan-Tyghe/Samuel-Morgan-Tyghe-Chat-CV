import { ComponentStyleConfig } from "@chakra-ui/react";

import { pxToRem } from "../../Utils/pxToRem";

export const Form: ComponentStyleConfig = {
  baseStyle: {
    helperText: {
      fontSize: pxToRem(12),
      color: "inherit",
      fontWeight: 350,
      lineHeight: pxToRem(16),
    },
  },
};
