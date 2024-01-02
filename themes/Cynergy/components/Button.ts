import { pxToRem } from "../../../src/Utils/pxToRem";

const smallbaseButtonStyles = {
  px: "16px",
  py: "4px",
  gap: "10px",
  fontSize: pxToRem(12),
  lineHeight: pxToRem(20),
};
const regularbaseButtonStyles = {
  py: "16px",
  px: "24px",
  gap: "20px",
};

const baseButtonStyles = {
  fontFamily: "Gotham Rounded, sans-serif",
  fontWeight: "400",
  fontSize: pxToRem(14),
  lineHeight: pxToRem(23),

  w: "fit-content",
  h: "auto",
  whiteSpace: "unset",
  textAlign: "center",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "8px",

  "&:focus-visible": {
    shadow: "outline",
    outline: "2px solid white",
    outlineOffset: "0",
  },
};

const primaryButtonStyles = {
  ...baseButtonStyles,
  bg: "primary.teal.60",
  color: "primary.teal.100",
  "&:hover": {
    bg: "primary.darkGreen.50",
  },
  "&:active": {
    bg: "primary.darkGreen.50",
  },
  "&:disabled": {
    bg: "primary.grey.20",
    color: "primary.darkGreen.40",
    opacity: "0.6",
    svg: {
      path: {
        fill: "primary.darkGreen.40",
      },
    },
  },
  svg: {
    width: "1rem",
    height: "1rem",
    path: {
      fill: "inherit",
    },
  },
};

const secondaryButtonStyles = {
  ...baseButtonStyles,
  bg: "primary.darkGreen.100",
  color: "primary.white.100",

  "&:hover": {
    bg: "primary.teal.100",
  },
  "&:active": {
    bg: "primary.teal.100",
  },
  "&:disabled": {
    bg: "primary.grey.20",
    color: "primary.darkGreen.40",
    opacity: "0.6",
  },
  svg: {
    path: {
      fill: "primary.white.100",
    },
  },
};

const tertiaryButtonStyles = {
  ...baseButtonStyles,
  color: "primary.teal.100",
  borderColor: "primary.teal.60",
  borderWidth: "1px",
  borderStyle: "solid",

  "&:hover": {
    borderColor: "primary.darkGreen.50",

    svg: {
      path: {
        fill: "primary.teal.100",
      },
    },
  },
  "&:active": {
    borderColor: "primary.darkGreen.50",

    svg: {
      path: {
        fill: "primary.teal.100",
      },
    },
  },
  "&:disabled": {
    borderColor: "primary.darkGreen.50",
    opacity: "0.6",

    svg: {
      path: {
        fill: "primary.darkGreen.40",
      },
    },
  },
  svg: {
    path: {
      fill: "primary.white.100",
    },
  },
};

const plainWithShadow = {
  ...baseButtonStyles,
  boxShadow: "custom",
  borderRadius: "10px",
  padding: {
    base: "15px 13px",
    md: "24px 16px",
  },
  justifyContent: "flex-start",
  fontSize: ["14px", null, null, "18px"],
  lineHeight: 1.3,
  textAlign: "left",

  "&:hover": {
    boxShadow: "customHover",
  },
  "&:active": {
    boxShadow: "customHover",
  },
  "&:disabled": {
    opacity: "0.6",
  },
};
const cardWithShadow = {
  ...baseButtonStyles,
  borderRadius: "10px",
  padding: 0,
  flexDirection: "column",
  justifyContent: "flex-start",
  overflow: "hidden",

  "&:hover": {
    boxShadow: "customHover",
  },
  "&:active": {
    boxShadow: "customHover",
  },
  "&:disabled": {
    opacity: "0.6",
  },
};

export const Button = {
  variants: {
    primary: {
      ...primaryButtonStyles,
      ...regularbaseButtonStyles,
    },
    primarySmall: {
      ...primaryButtonStyles,
      ...smallbaseButtonStyles,
    },
    secondary: {
      ...secondaryButtonStyles,
      ...regularbaseButtonStyles,
    },
    secondarySmall: {
      ...secondaryButtonStyles,
      ...smallbaseButtonStyles,
    },
    tertiary: {
      ...tertiaryButtonStyles,
      ...regularbaseButtonStyles,
    },
    tertiarySmall: {
      ...tertiaryButtonStyles,
      ...smallbaseButtonStyles,
    },
    plainWithShadow,
    cardWithShadow,
    image: {
      p: 0,
      m: 0,
      bg: "transparent",
      border: "none",
      outline: "none",
      h: "auto",

      "&:active": {
        opacity: 0.8,
      },
      "&:hover": {
        opacity: 0.8,
      },
      "&:focus-visible": {
        shadow: "outline",
        outline: "2px solid white",
        outlineOffset: "0",
      },
    },
    outline: {
      ...baseButtonStyles,
      w: "auto",
      h: "53px",
      p: "15px 20px",
      display: "flex",
      gap: "10px",
      border: "1px solid",
      borderColor: "primary.teal.60",
      borderRadius: "0px",
      color: "primary.teal.100",
      fontWeight: "700",
      fontSize: pxToRem(14),
      lineHeight: "161%",
      svg: {
        path: {
          fill: "primary.teal.100",
        },
      },
      "&:hover": {
        border: "1px solid",
        borderColor: "primary.teal.80",
      },
    },
    card: {
      ...baseButtonStyles,
      w: "auto",
      h: "53px",
      p: "15px 20px",
      display: "flex",
      gap: "10px",
      bg: "secondary.yellow.100",
      color: "primary.teal.100",
      borderRadius: "0px",
      fontWeight: "700",
      fontSize: pxToRem(14),
      lineHeight: "161%",
      "&:hover": {
        bg: "secondary.yellow.80",
      },
      svg: {
        path: {
          fill: "primary.teal.100",
        },
      },
    },
  },
  none: {
    p: 0,
    bg: "transparent",
    "&:hover": {
      bg: "transparent",
    },
    "&:disabled": {
      bg: "transparent",
    },
    "&:focus": {
      bg: "transparent",
    },
    "&:active": {
      bg: "transparent",
    },
  },
};
