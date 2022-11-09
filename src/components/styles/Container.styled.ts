import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const Container = styled.div<Props>`
  display: grid;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  justify-content: center;
`;
export default Container;
