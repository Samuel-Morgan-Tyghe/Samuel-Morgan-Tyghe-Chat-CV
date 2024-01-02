import { type ComponentStyleConfig } from "@chakra-ui/react";

import { pxToRem } from "../../../src/Utils/pxToRem";

const navStyles = {
  container: {
    borderColor: "primary.teal.60",
  },
  icon: {
    color: "inherit",
  },
  button: {
    color: "inherit",
    fontWeight: "350",
    fontSize: pxToRem(20),
    lineHeight: pxToRem(24),
    textTransform: "uppercase",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    p: "20px 0",

    "&:hover": {
      bg: "transparent",
    },
    "&:focus-visible": {
      shadow: "outline",
      outline: "2px solid white",
      outlineOffset: "0",
    },
  },
  panel: {
    p: "10px 10px 40px",
  },
};

export const Accordion: ComponentStyleConfig = {
  baseStyle: {
    item: {
      borderColor: "primary.white.100",
    },
  },
  variants: {
    navStyles: {
      ...navStyles,
    },
  },
};
