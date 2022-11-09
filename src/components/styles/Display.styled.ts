import styled from "styled-components";
import { ThemeType } from "../theme";

type Props = {
  theme: ThemeType;
};

const StyledDisplay = styled.input<Props>`
  width: 100%;
  background: ${({ theme }) => (theme as ThemeType).colors.ScreenBg};
  padding: 1.6rem 1.4rem;
  border-radius: 10px;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => (theme as ThemeType).colors.NormalText};
  text-align: right;
  border: 0;
  outline: 0;
`;

export { StyledDisplay };
