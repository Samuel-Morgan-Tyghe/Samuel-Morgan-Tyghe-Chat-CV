import { type ComponentStyleConfig } from "@chakra-ui/react";

import { pxToRem } from "../../Utils/pxToRem";

const navStyles = {
  list: {
    p: 0,
    borderRadius: 0,
    border: "none",
    bg: "primary.darkGreen.100",
    mt: "-8px",
  },
  groupTitle: {
    color: "primary.teal.40",
    fontSize: pxToRem(16),
    fontWeight: 350,
    textTransform: "uppercase",
    m: "0 0 24px",
    p: 0,
  },
  item: {
    color: "inherit",
    bg: "transparent",
    fontSize: pxToRem(14),
    lineHeight: pxToRem(23),
    p: "8px 0",
    _hover: {
      textDecoration: "underline",
      bg: "transparent",
    },
    _focusVisible: {
      textDecoration: "underline",
      bg: "transparent",
    },
  },
};

const loginStyles = {
  list: {
    p: "10px",
    borderRadius: "10px",
    border: "none",
    bg: "primary.teal.60",
  },
  item: {
    color: "primary.darkGreen.100",
    bg: "primary.teal.60",
    fontSize: pxToRem(14),
    lineHeight: pxToRem(23),
    _hover: {
      textDecoration: "underline",
      bg: "primary.teal.60",
    },
  },
};

export const Menu: ComponentStyleConfig = {
  variants: {
    loginStyles: {
      ...loginStyles,
    },
    navStyles: {
      ...navStyles,
    },
  },
};
