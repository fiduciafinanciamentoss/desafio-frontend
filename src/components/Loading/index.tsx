import React from "react";

import { Container, Load } from "./styles";

interface ContainerProps {
  animationData: any;
}

export const Loading: React.FC<ContainerProps> = ({
  animationData,
  ...rest
}) => {
  return (
    <Container>
      <Load options={{ animationData }} height={400} width={400} {...rest} />
    </Container>
  );
};
