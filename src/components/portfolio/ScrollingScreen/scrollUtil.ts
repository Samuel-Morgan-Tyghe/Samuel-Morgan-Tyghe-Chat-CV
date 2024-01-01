export const sectionsArray = [1, 1, 1, 1];

const calculateScrollRanges = (sections) => {
  let totalSections = 0;
  return sections.map((section) => {
    const rangeStart = totalSections;
    totalSections += section;
    const rangeEnd = totalSections;
    return { rangeStart, rangeEnd };
  });
};

export const scrollRanges = calculateScrollRanges(sectionsArray);
