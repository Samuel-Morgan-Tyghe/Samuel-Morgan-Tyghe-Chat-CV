import { type ComponentStyleConfig } from "@chakra-ui/react";

import { pxToEm } from "../../Utils/pxToEm";
import { pxToRem } from "../../Utils/pxToRem";

export const Heading: ComponentStyleConfig = {
  baseStyle: {
    wordBreak: "break-word",
  },
  variants: {
    H1B: {
      fontSize: [pxToRem(40), null, pxToRem(45), null, pxToRem(64)],
      fontWeight: "350",
      lineHeight: [pxToRem(46), null, pxToRem(50), null, pxToRem(74)],
    },
    H1: {
      fontSize: pxToRem(64),
      fontWeight: "300",
      lineHeight: "116%",
    },
    H2: {
      fontSize: [pxToRem(30), null, null, pxToRem(48)],
      fontWeight: "325",
      lineHeight: "125%",
    },
    H3B: {
      fontSize: pxToRem(32),
      fontWeight: "350",
      lineHeight: "125%",
    },
    H3: {
      fontSize: pxToRem(32),
      fontWeight: "325",
      lineHeight: "125%",
    },
    H4: {
      fontSize: pxToRem(24),
      fontWeight: "350",
      lineHeight: "125%",
    },
    subheading: {
      color: "#767676",
      fontFeatureSettings: "'clig' off, 'liga' off",
      fontFamily: "Gotham Rounded",
      fontSize: [pxToRem(14), null, null, pxToRem(18)],
      fontStyle: "normal",
      fontWeight: 350,
      lineHeight: "normal",
      textTransform: "uppercase",
    },

    wysiwyg_h1: {
      fontSize: [pxToEm(45), null, null, pxToEm(50)],
      fontWeight: "325",
      lineHeight: "125%",
      mb: pxToRem(42),
    },
    wysiwyg_h2: {
      fontSize: pxToEm(32),
      fontWeight: "350",
      lineHeight: "125%",
      mb: pxToRem(26),
    },
    wysiwyg_h3: {
      fontSize: pxToEm(24),
      fontWeight: "350",
      lineHeight: "125%",
      mb: pxToRem(26),
    },
    wysiwyg_h4: {
      fontSize: pxToEm(22),
      fontWeight: "350",
      lineHeight: "125%",
      mb: pxToRem(26),
    },
    wysiwyg_h5: {
      fontSize: pxToEm(20),
      fontWeight: "350",
      lineHeight: "125%",
      mb: pxToRem(26),
    },
    wysiwyg_h6: {
      fontSize: pxToEm(20),
      fontWeight: "325",
      lineHeight: "125%",
      mb: pxToRem(26),
    },
  },
};
