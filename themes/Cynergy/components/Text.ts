import { type ComponentStyleConfig } from "@chakra-ui/react";

import { pxToEm } from "../../../src/Utils/pxToEm";
import { pxToRem } from "../../../src/Utils/pxToRem";

export const Text: ComponentStyleConfig = {
  baseStyle: {
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontFamily: "Montserrat",
    fontSize: [pxToRem(14), null, null, pxToRem(18)],
    fontStyle: "normal",
    fontWeight: 350,
    lineHeight: "normal",
  },

  variants: {
    subheading: {
      color: "#767676",
      fontSize: pxToRem(16),
      textTransform: "uppercase",
    },
    subheadingDark: {
      color: "primary.darkGreen.100",
      fontSize: pxToRem(16),
      textTransform: "uppercase",
    },

    footerLink: {
      fontSize: pxToRem(16),
      fontWeight: 400,
      lineHeight: pxToRem(22),
      maxW: "250px",
    },

    accordionTitle: {
      color: "primary.darkGreen.100",
      fontSize: [pxToRem(16), null, null, pxToRem(22)],
      fontWeight: 325,
      lineHeight: [pxToRem(19), null, null, pxToRem(24.2)],
    },

    largeBook: {
      color: "primary.darkGreen.100",
      fontSize: [pxToRem(14), null, null, pxToRem(18)],
      fontWeight: 325,
      lineHeight: [pxToRem(23), null, null, pxToRem(28)],
    },

    smallBook: {
      color: "primary.darkGreen.100",
      fontSize: pxToRem(16),
      fontWeight: 325,
      lineHeight: pxToRem(28),
    },

    cardHeading: {
      fontSize: [pxToRem(30), null, null, pxToRem(32)],
      lineHeight: pxToRem(40),
    },

    cardDate: {
      fontSize: pxToRem(16),
      fontWeight: 400,
      lineHeight: pxToRem(22),
    },

    tab: {
      color: "primary.darkGreen.100",
      fontSize: [pxToRem(28), null, null, null, null, pxToRem(32)],
      fontWeight: 325,
      lineHeight: [pxToRem(32), null, null, null, null, pxToRem(38)],
      textAlign: "center",
    },

    breadcrumb: {
      fontSize: pxToRem(16),
      fontWeight: 325,
    },
    searchLink: {
      color: "primary.darkGreen.100",
      fontSize: pxToRem(24),
      fontWeight: 350,
      lineHeight: pxToRem(30),
      textDecoration: "underline",
    },

    wysiwyg_p: {
      mb: pxToRem(26),
      fontSize: [pxToEm(14), null, null, pxToEm(18)],
      fontWeight: 325,
      lineHeight: [pxToEm(23), null, null, pxToEm(28)],
      "&:last-of-type": {
        mb: 0,
      },
      a: {
        textDecoration: "underline",
      },
    },

    inherit: {
      fontSize: "inherit",
      fontWeight: "inherit",
      color: "inherit",
      lineHeight: "inherit",
    },
  },
};
