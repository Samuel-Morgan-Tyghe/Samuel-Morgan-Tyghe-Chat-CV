import React, { useState } from "react";
import { Text, TextProps } from "@chakra-ui/react";

// Define the type for the project texts
interface ProjectTexts {
  CB: string;
  CG: string;
  SS: string;
  SOGP: string;
  COTY: string;
}

// Define the project texts based on your CV
const projectDescriptions: ProjectTexts = {
  CB: "Cynergy Bank project involved creating a responsive and accessible web application using NextJs, Contentful, TypeScript, and ChakraUI.",
  CG: "For Caroline Girvan web app, developed a highly interactive and user-friendly interface with Vite, TypeScript, React-query, and ChakraUI.",
  SS: "Stocknet Institute's platform was designed to leverage financial data visualization using Chart.js, NextJs, TypeScript, and React-query.",
  SOGP: "ISF SOGP required a single-page application with a focus on performance and state management using React Context and SPA techniques.",
  COTY: "Cotytrip.com was built to offer a rich user experience, integrating various technologies like Redux, Sass, and PWA to deliver a robust travel planning tool.",
};

// Component that takes a project key and displays the corresponding text
export const ProjectText: React.FC<
  { projectKey: keyof ProjectTexts } & TextProps
> = ({ projectKey, ...props }) => {
  const [projectText, setProjectText] = useState<string>("");

  // Function to fetch project text
  const fetchProjectText = (key: keyof ProjectTexts): string => {
    return projectDescriptions[key];
  };

  // Simulate fetching data on mount
  React.useEffect(() => {
    const text = fetchProjectText(projectKey);
    setProjectText(text);
  }, [projectKey]);

  return <Text {...props}>{projectText}</Text>;
};

// Usage example:
// <ProjectText projectKey="CB" />
