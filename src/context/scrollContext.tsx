import { scrollRanges } from "@components/portfolio/ScrollingScreen/scrollUtil";
import React, { createContext, useState, useContext, useEffect } from "react";
import { pageComponents } from "~/pages/portfolio";

const PageNumberContext = createContext({
  pageNumber: 0,
  setPageNumber: (value: number) => {},
  activeSection: 0,
  setActiveSection: (value: number) => {},
  totalPageScrollLength: 0,
  currentPageScrollLength: 0,
});

export const PageNumberProvider = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const totalPageScrollLength = pageComponents.reduce(
    (acc, sections) => acc + sections.length,
    0
  );

  const currentPageScrollLength =
    pageNumber < pageComponents.length ? pageComponents[pageNumber].length : 0;

  useEffect(() => {
    const handleScroll = () => {
      const verticalScrollPosition = window?.scrollY ?? 0;
      const viewportHeight = window?.innerHeight ?? 0;
      setActiveSection(Math.floor(verticalScrollPosition / viewportHeight));

      const scrollPosition = verticalScrollPosition / viewportHeight;
      const currentPage = scrollRanges.findIndex(
        ({ rangeStart, rangeEnd }) =>
          scrollPosition >= rangeStart && scrollPosition < rangeEnd
      );

      if (currentPage !== -1) {
        setPageNumber(currentPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageNumber]);

  return (
    <PageNumberContext.Provider
      value={{
        pageNumber,
        setPageNumber,
        activeSection,
        setActiveSection,
        totalPageScrollLength,
        currentPageScrollLength,
      }}
    >
      {children}
    </PageNumberContext.Provider>
  );
};

export const usePageNumber = () => {
  const context = useContext(PageNumberContext);
  if (!context) {
    throw new Error("usePageNumber must be used within a PageNumberProvider");
  }
  return context;
};
