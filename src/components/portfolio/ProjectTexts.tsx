import React, { useState } from "react";
import { Text, TextProps } from "@chakra-ui/react";

// Define the type for the project texts
export interface ProjectTexts {
  CB: string;
  CG: string;
  ISFSC: string;
  SOGP: string;
  COTY: string;
  STOCKNET: string;
}

// Define the project texts based on your CV
const projectDescriptions: ProjectTexts = {
  CB: "The Cynergy Bank project showcased my ability to create a responsive and accessible web application tailored for the finance industry. Utilizing a stack comprising NextJs, Contentful, TypeScript, and ChakraUI, I was able to deliver a product that not only meets the technical standards but also aligns with the strategic goals of the bank, enhancing customer engagement and operational efficiency.",

  CG: "The Caroline Girvan web app is a testament to my focus on user experience and interactivity. By leveraging the capabilities of Vite, TypeScript, React-query, and ChakraUI, I built an application that stands out for its seamless user interactions and robust performance, contributing significantly to the online presence and brand image of the fitness influencer.",

  ISFSC:
    "At the ISF SupplyChain project, my role involved creating dynamic tables and complex form inputs using TypeScript, React-Query, and ChakraUi. The project demanded innovative UI solutions and a widget-based data entry approach, which I successfully implemented to enhance user engagement and data management capabilities.",

  STOCKNET:
    "For the Stocknet Institute, I developed a platform that effectively leverages financial data visualization. Utilizing technologies such as Chart.js, NextJs, TypeScript, and React-query, I was able to create a comprehensive and interactive tool for stock market analysis, which has been pivotal in supporting the institute's research and educational objectives.",

  SOGP: "The ISF SOGP project required a single-page application that emphasized performance and efficient state management. Using React Context and SPA techniques, I delivered a solution that not only met the functional requirements but also offered a streamlined user experience, facilitating the organization's operational workflow.",

  COTY: "For cotytrip.com, I was involved in creating a multifaceted travel planning tool that integrates various technologies including Redux, Sass, and PWA. The project aimed to enhance the travel planning experience with a rich user interface and was particularly challenging due to the need for integrating a variety of tools such as Html2Canvas, Chart-Js, MarkerJs2, and React-Select.",
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
