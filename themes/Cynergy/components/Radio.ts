import { type ComponentStyleConfig } from "@chakra-ui/react";
import { merge } from "lodash";

import { pxToRem } from "../../../src/Utils/pxToRem";
import { FormLabel } from "./FormLabel";

const controlOuterStyles: ComponentStyleConfig["baseStyle"] = {
  height: pxToRem(24),
  width: pxToRem(24),
  borderWidth: "1px",
  background: "transparent",
  borderColor: "primary.darkGreen.100",
  color: "transparent",

  _before: {
    height: pxToRem(16),
    width: pxToRem(16),
    content: '""',
    display: "inline-block",
    position: "relative",
    borderRadius: "50%",
    bg: "currentColor",
  },
};

export const Radio: ComponentStyleConfig = merge({}, {
  baseStyle: {
    label: {
      ...FormLabel.baseStyle,
      marginBottom: 0,
      fontSize: pxToRem(10),
    },

    control: {
      ...controlOuterStyles,

      _hover: {
        ...controlOuterStyles,
        borderColor: "primary.teal.40",
        color: "primary.teal.40",
      },

      _focus: {
        boxShadow: "bright !important",
      },

      _checked: {
        ...controlOuterStyles,
        borderColor: "primary.teal.40",

        _before: {
          ...(controlOuterStyles._before as object),
          height: pxToRem(16),
          width: pxToRem(16),
          background: "primary.teal.40",
        },

        _hover: {
          background: "transparent",
        },
      },
      _disabled: {
        background: "transparent",

        _hover: {
          borderColor: "gray.100",

          _before: {
            background: "transparent",
          },
        },
      },
    },
  },

  variants: {
    light: {
      label: {
        color: "#ffffff",
      },

      control: {
        borderColor: "#ffffff",

        _hover: {
          borderColor: "#ffffff",
          color: "#ffffff",
        },

        _checked: {
          borderColor: "#ffffff",

          _before: {
            background: "#ffffff",
          },
        },
      },
    },
  },

  sizes: {
    md: {
      label: {
        // Typescript thinks the fontSize may not be defined
        // because it's not required by the inferred
        // `ComponentStyleConfig` schema
        // @ts-ignore
        fontSize: FormLabel.baseStyle!.fontSize,
      },
    },
  },
} as ComponentStyleConfig);
