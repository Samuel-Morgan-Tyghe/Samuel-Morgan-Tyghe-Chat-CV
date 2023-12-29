import { type ComponentStyleConfig } from "@chakra-ui/react";

import { pxToRem } from "../../Utils/pxToRem";

export const Slider: ComponentStyleConfig = {
  baseStyle: {
    container: {
      display: "block",
    },

    track: {
      height: pxToRem(6),
      background: "primary.grey.40",
      borderRadius: pxToRem(6),
    },

    filledTrack: {
      background: "primary.teal.60",
    },

    thumb: {
      background: "primary.teal.100",
      height: pxToRem(20),
      width: pxToRem(29),
    },
  },

  variants: {
    light: {
      thumb: {
        background: "#ffffff",
      },
    },
  },
};
