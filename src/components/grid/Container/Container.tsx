import { As, Box } from "@chakra-ui/react";
import { type Booleanish } from "@chakra-ui/utils";
import { type ReactNode } from "react";
import { classNames } from "~/Utils/helpers";

export const containerMaxWidth = {
  base: "100%",
  sm: "29em",
  md: "45em",
  lg: "60em",
  xl: "71.5625em",
  "2xl": "90em",
};

export const containerGutter = "16px";

const containerMaxWidthFluid = "100%";

export default function Container(props: {
  children?: ReactNode;
  fluid?: Booleanish;
  className?: string;
  as?: As;
}) {
  const { fluid, children, ...passThroughProps } = props;

  return (
    <Box
      className={classNames(["container", props?.className])}
      marginLeft="auto"
      marginRight="auto"
      paddingLeft={containerGutter}
      paddingRight={containerGutter}
      maxWidth={fluid ? containerMaxWidthFluid : containerMaxWidth}
      {...passThroughProps}
    >
      {children}
    </Box>
  );
}
