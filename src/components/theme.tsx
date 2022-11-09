import { useSelector } from "react-redux";
import { FC, ReactNode, useMemo } from "react";
import { RootState } from "../redux";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

type Props = {
  children: ReactNode;
};

const colors = [
  {
    MainBg: "hsl(222, 26%, 31%)",
    ToggleBg: "hsl(223, 31%, 20%)",
    KeypadBg: "hsl(223, 31%, 20%)",
    ScreenBg: "hsl(224, 36%, 15%)",
    FunKeyBg: "hsl(225, 21%, 49%)",
    FunKeyShadow: "hsl(224, 28%, 35%)",
    Toggle: "hsl(6, 63%, 50%)",
    EqualKeyBg: "hsl(6, 63%, 50%)",
    EqualKeyShadow: "hsl(6, 70%, 34%)",
    NormalKeyBg: "hsl(30, 25%, 89%)",
    NormalKeyShadow: "hsl(28, 16%, 65%)",
    NormalText: "hsl(0, 0%, 100%)",
    NormalKeyText: "hsl(221, 14%, 31%)",
    FunKeyText: "hsl(0, 0%, 100%)",
    EqualKeyText: "hsl(0, 0%, 100%)",
  },
  {
    MainBg: "hsl(0, 0%, 90%)",
    ToggleBg: "hsl(0, 5%, 81%)",
    KeypadBg: "hsl(0, 5%, 81%)",
    ScreenBg: "hsl(0, 0%, 93%)",
    FunKeyBg: "hsl(185, 42%, 37%)",
    FunKeyShadow: "hsl(185, 58%, 25%)",
    Toggle: "hsl(25, 98%, 40%)",
    EqualKeyBg: "hsl(25, 98%, 40%)",
    EqualKeyShadow: "hsl(25, 99%, 27%)",
    NormalKeyBg: "hsl(45, 7%, 89%)",
    NormalKeyShadow: "hsl(35, 11%, 61%)",
    NormalText: "hsl(60, 10%, 19%)",
    NormalKeyText: "hsl(60, 10%, 19%)",
    FunKeyText: "hsl(0, 0%, 100%)",
    EqualKeyText: "hsl(0, 0%, 100%)",
  },
  {
    MainBg: "hsl(268, 75%, 9%)",
    ToggleBg: "hsl(268, 71%, 12%)",
    KeypadBg: "hsl(268, 71%, 12%)",
    ScreenBg: "hsl(268, 71%, 12%)",
    FunKeyBg: "hsl(281, 89%, 26%)",
    FunKeyShadow: "hsl(285, 91%, 52%)",
    Toggle: "hsl(176, 100%, 44%)",
    EqualKeyBg: "hsl(176, 100%, 44%)",
    EqualKeyShadow: "hsl(177, 92%, 70%)",
    NormalKeyBg: "hsl(268, 47%, 21%)",
    NormalKeyShadow: "hsl(290, 70%, 36%)",
    NormalText: "hsl(52, 100%, 62%)",
    NormalKeyText: "hsl(52, 100%, 62%)",
    FunKeyText: "hsl(0, 0%, 100%)",
    EqualKeyText: "hsl(198, 20%, 13%)",
  },
];

const ThemeProvider: FC<Props> = ({ children }) => {
  const { mode } = useSelector((state: RootState) => state.theme);
  const theme = useMemo(() => {
    return {
      colors: colors[mode],
    };
  }, [mode]);

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;

const themeExample = {
  colors: colors[0],
};
export type ThemeType = typeof themeExample;
