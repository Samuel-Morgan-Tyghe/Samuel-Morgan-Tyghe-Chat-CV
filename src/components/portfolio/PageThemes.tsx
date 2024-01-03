import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export type ColorTheme = {
  primary: string;
  background: string;
  accent: string;
  secondary: string;
  highlight: string;
};

export const THEME_NAMES = [
  "CB",
  "CG",
  "ISFSC",
  "SOGP",
  "COTY",
  "STOCKNET",
] as const;

export const PAGE_THEME = (theme) =>
  ({
    CB: {
      primary: "#000000",
      background: "#FFFFFF",
      accent: "#00A3A1",
      secondary: "#4D4D4D",
      highlight: "#00263A",
    },
    CG: {
      primary: "#0F1526",
      background: "#FFFFFF",
      accent: "#FFA600",
      secondary: "#636366",
      highlight: "#3CB83C",
    },
    ISFSC: {
      primary: "#252525",
      background: "#FFFFFF",
      accent: "#65AC65",
      secondary: "#E0E0E0",
      highlight: "#3CB83C",
    },
    SOGP: {
      primary: "#252525",
      background: "#FFFFFF",
      accent: "#FFAC00",
      secondary: "#E0E0E0",
      highlight: "#BDBDBD",
    },
    COTY: {
      primary: "#333333",
      background: "#E0F7FA",
      accent: "#009688",
      secondary: "#757575",
      highlight: "#FFC107",
    },
    STOCKNET: {
      primary: "#2E384D",
      background: "#F4F7FA",
      accent: "#10A5F5",
      secondary: "#68768A",
      highlight: "#FFFFFF",
    },
  }[theme] ?? {
    primary: "#0F1526",
    background: "#FFFFFF",
    accent: "#FFA600",
    secondary: "#636366",
    highlight: "#3CB83C",
  });

export const getThemeFromPageNumber = (pageNumber: number) => {
  return PAGE_THEME(THEME_NAMES[pageNumber]) as ColorTheme;
};

const hexToNum = (hex: string): number => {
  return parseInt(hex.replace("#", ""), 16);
};

// Utility function to convert a numerical value back to an RGB string
const numToRgbString = (num: number): string => {
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgb(${r}, ${g}, ${b})`;
};

const useAnimatedTheme = (pageNumber: number) => {
  const theme = getThemeFromPageNumber(pageNumber);

  // Create a MotionValue for each color and animate it
  const accentNum = useMotionValue(hexToNum(theme.accent));
  const secondaryNum = useMotionValue(hexToNum(theme.secondary));
  const primaryNum = useMotionValue(hexToNum(theme.primary));
  const backgroundNum = useMotionValue(hexToNum(theme.background));
  const highlightNum = useMotionValue(hexToNum(theme.highlight));

  const accentSpring = useSpring(accentNum, { stiffness: 100, damping: 30 });
  const secondarySpring = useSpring(secondaryNum, {
    stiffness: 100,
    damping: 30,
  });
  const primarySpring = useSpring(primaryNum, { stiffness: 100, damping: 30 });
  const backgroundSpring = useSpring(backgroundNum, {
    stiffness: 100,
    damping: 30,
  });
  const highlightSpring = useSpring(highlightNum, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    accentNum.set(hexToNum(theme.accent));
    secondaryNum.set(hexToNum(theme.secondary));
    primaryNum.set(hexToNum(theme.primary));
    backgroundNum.set(hexToNum(theme.background));
    highlightNum.set(hexToNum(theme.highlight));
  }, [theme, accentNum, secondaryNum, primaryNum, backgroundNum, highlightNum]);

  return {
    accent: numToRgbString(accentNum.get()),
    secondary: numToRgbString(secondaryNum.get()),
    primary: numToRgbString(primaryNum.get()),
    background: numToRgbString(backgroundNum.get()),
    highlight: numToRgbString(highlightNum.get()),
  };
};

export default useAnimatedTheme;
