import { As, SimpleGrid } from "@chakra-ui/react";
import { type Booleanish } from "@chakra-ui/utils";
import { type ReactNode } from "react";
import { classNames } from "~/Utils/helpers";

import Container from "../Container/Container";

export default function ContainerGrid({
  children,
  isFluid,
  className,
  as,
  ...props
}: {
  children?: ReactNode;
  isFluid?: Booleanish;
  as?: As;
  props?: any;
  className?: string;
}) {
  return (
    <Container
      className={classNames(["container-grid", className])}
      fluid={Boolean(isFluid)}
      as={as}
    >
      <SimpleGrid columns={12} spacing={["16px", "32px"]} {...props}>
        {children}
      </SimpleGrid>
    </Container>
  );
}
