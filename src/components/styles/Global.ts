import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../theme";

type Props = {
  theme: ThemeType;
};

const GlobalStyles = createGlobalStyle<Props>`
  *{
    box-sizing: border-box;
  }

  body, html, #root {
    margin: 0;
    font-family: 'League Spartan', sans-serif;
    width: 100%;
    height: 100%;
  }

  #root {
    background-color: ${({ theme }) => theme.colors.MainBg};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    #root {
      align-items: flex-start;
      padding: 8% 3%;
    }
  }
`;
export default GlobalStyles;
