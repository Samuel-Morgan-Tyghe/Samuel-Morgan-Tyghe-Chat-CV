import { useBreakpointValue } from "@chakra-ui/react";

type BreakpointPxValue = string | undefined;

export const usePrimaryBreakpoint = (): { x: BreakpointPxValue } => {
  const breakpointValue = useBreakpointValue({
    base: "30px",
    sm: "30px",
    md: "80px",
    "2xl": "calc((100vw - 1440px) / 2)",
  });

  return { x: breakpointValue };
};

/**
 * @deprecated Use a combination of Container and padding + max width values.
 */
export const useSecondaryXBreakpoint = (): { x: BreakpointPxValue } => {
  const breakpointValue = useBreakpointValue({
    base: "15px",
    sm: "15px",
    md: "15px",
    "2xl": "calc((100vw - 1440px) / 2)",
  });

  return { x: breakpointValue };
};

/**
 * @deprecated Use a combination of Container and padding + max width values.
 */
export const useTertiaryXBreakpoint = (): { x: BreakpointPxValue } => {
  const breakpointValue = useBreakpointValue({
    base: "162px",
    sm: "162px",
    md: "162px",
    "2xl": "calc((100vw - 1440px) / 2)",
  });

  return { x: breakpointValue };
};

/**
 * @deprecated Use a combination of Container and padding + max width values.
 */
export const useQuaterniaryXBreakpoint = (): { x: BreakpointPxValue } => {
  const breakpointValue = useBreakpointValue({
    base: "16px",
    md: "3vw", // 50px approx
    "2xl": "calc((100vw - 1440px) / 2)",
  });

  return { x: breakpointValue };
};

/**
 * @deprecated Use a combination of Container and padding + max width values.
 */
export const useSexterniaryXBreakpoint = (): { x: BreakpointPxValue } => {
  const breakpointValue = useBreakpointValue({
    base: "0px",
    md: "120px",
    "2xl": "calc((100vw - 1440px) / 2)",
  });

  return { x: breakpointValue };
};

/**
 * @deprecated Use a combination of Container and padding + max width values.
 */
export const useSepterniaryXBreakpoint = (): { x: BreakpointPxValue } => {
  const breakpointValue = useBreakpointValue({
    base: "0px",
    md: "276px",
    "2xl": "calc((100vw - 1440px) / 2)",
  });

  return { x: breakpointValue };
};
