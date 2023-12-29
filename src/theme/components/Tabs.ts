import { type ComponentStyleConfig } from "@chakra-ui/react";

import { pxToRem } from "../../Utils/pxToRem";

const verticalStyle = {
  root: {
    flexDirection: {
      base: "column",
      md: "row",
    },
    w: "100%",
  },
  tablist: {
    justifyContent: "flex-start",
    flexDirection: {
      base: "row",
      md: "column",
    },
    minW: { md: "31%" },
    px: {
      base: "16px",
      sm: 0,
    },
    py: "0",
    mb: "0",
  },
  tab: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(22),
    p: {
      base: "16px",
      lg: "16px 30px",
    },
    whiteSpace: "unset",
    borderLeft: {
      md: "6px solid transparent",
    },
    borderBottom: 0,
    flexShrink: 0,
    flexGrow: {
      md: 0,
    },
    justifyContent: "flex-start",
    textAlign: "left",
    _selected: {
      bgColor: "primary.grey.60",
      fontWeight: "400",
      borderLeft: {
        md: "6px solid transparent",
      },
      borderLeftColor: { md: "primary.teal.60" },
      _after: {
        display: "none",
      },
    },
  },
  tabpanels: {
    bgColor: "primary.grey.60",
    borderBottom: {
      base: "6px solid",
      md: "none",
    },
    borderRight: {
      md: "6px solid",
    },
    borderColor: "primary.teal.60",
    borderRightColor: { md: "primary.teal.60" },
    p: {
      base: "16px",
      md: "16px 40px",
    },
  },
};

export const Tabs: ComponentStyleConfig = {
  baseStyle: {
    tablist: {
      marginBottom: "30px",
      overflow: "auto",
      paddingBottom: "2px",
      border: 0,
      marginX: {
        base: "-16px",
        sm: 0,
      },
    },

    tab: {
      color: "primary.darkGreen.100",
      fontSize: pxToRem(30),
      fontWeight: 325,
      textAlign: "center",
      position: "relative",
      border: 0,
      overflow: "hidden",
      margin: 0,
      whiteSpace: "nowrap",
      flexShrink: 0,
      flex: "auto",
      borderBottom: "1px solid",
      borderBottomColor: "primary.grey.80",

      _after: {
        content: '""',
        background: "primary.teal.60",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "4px",
        borderRadius: "2.5px 2.5px 0px 0px",
        transition: "0.15s",
        opacity: 0,
        transform: "translateY(5px)",
      },

      _selected: {
        color: "primary.darkGreen.100",
        border: 0,
        fontWeight: 350,

        _after: {
          opacity: 1,
          transform: "translateY(0)",
        },
      },

      _focusVisible: {
        shadow: "inset 0 0 0 4px #003D4D",
        outline: "2px solid white",
        outlineOffset: "0",
      },
    },

    tabpanel: {
      padding: 0,
    },
  },

  variants: {
    verticalStyle: verticalStyle,
  },

  sizes: {
    md: {
      tablist: {
        border: 0,
      },

      tab: {
        paddingY: "20px",
        margin: 0,
        lineHeight: "118.75%",

        fontSize: {
          base: pxToRem(20),
          "2xl": pxToRem(32),
        },
      },
    },
  },
};
