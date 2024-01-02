import { useState, useCallback } from "react";

type ColorTheme = {
  primary: string;
  background: string;
  accent: string;
  secondary: string;
  highlight: string;
};

export const THEME_NAMES = ["CB", "CG", "SS", "SOGP", "COTY"];

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
    SS: {
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
