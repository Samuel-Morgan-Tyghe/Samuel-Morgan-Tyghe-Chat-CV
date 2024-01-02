import React, {
  createContext,
  useState,
  useContext,
  SetStateAction,
} from "react";

// Create a Context
const PageNumberContext = createContext({
  pageNumber: 0,
  setPageNumber: (value: SetStateAction<number>) => {},
});

// Provider component that wraps your app and makes the pageNumber state available to any child component that calls `usePageNumber()`.
export const PageNumberProvider = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <PageNumberContext.Provider value={{ pageNumber, setPageNumber }}>
      {children}
    </PageNumberContext.Provider>
  );
};

// Hook that enables any component to subscribe to pageNumber state
export const usePageNumber = () => {
  const context = useContext(PageNumberContext);
  if (!context) {
    throw new Error("usePageNumber must be used within a PageNumberProvider");
  }
  return context;
};
