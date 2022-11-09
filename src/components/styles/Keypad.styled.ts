import styled from "styled-components";
import { ThemeType } from "../theme";

type Props = {
  theme: ThemeType;
};

const StyledKeypad = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, min-content);
  gap: 1rem;
  padding: 1.5rem;
  background: ${({ theme }) => (theme as ThemeType).colors.KeypadBg};
  border-radius: 10px;
`;

interface NormalKeyProps extends Props {
  isNumber: boolean;
}

const NormalKey = styled.button<NormalKeyProps>`
  font-size: ${({ isNumber }) => (isNumber ? "26px" : "20px")};
  font-weight: ${({ isNumber }) => (isNumber ? "700" : "800")};
  width: 100%;
  padding: 6px 0;
  border: none;
  color: ${({ theme }) => (theme as ThemeType).colors.NormalKeyText};
  box-shadow: 0 2px 0
    ${({ theme }) => (theme as ThemeType).colors.NormalKeyShadow};
  border-radius: 8px;
  cursor: pointer;
  margin: 0;
  background: ${({ theme }) => (theme as ThemeType).colors.NormalKeyBg};

  &:active {
    box-shadow: 0 0px 0
      ${({ theme }) => (theme as ThemeType).colors.NormalKeyShadow};
    margin-top: 2px;
    margin-bottom: -2px;
  }
`;

const FunKey = styled.button<Props>`
  font-size: 18px;
  font-weight: 700;
  width: 100%;
  padding: 6px 0;
  border: none;
  color: ${({ theme }) => (theme as ThemeType).colors.FunKeyText};
  box-shadow: 0 2px 0 ${({ theme }) => (theme as ThemeType).colors.FunKeyShadow};
  border-radius: 8px;
  cursor: pointer;
  margin: 0;
  background: ${({ theme }) => (theme as ThemeType).colors.FunKeyBg};

  &:active {
    box-shadow: 0 0px 0
      ${({ theme }) => (theme as ThemeType).colors.FunKeyShadow};
    margin-top: 2px;
    margin-bottom: -2px;
  }
`;

const ResetKey = styled.button<Props>`
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  padding: 12px 0;
  border: none;
  color: ${({ theme }) => (theme as ThemeType).colors.FunKeyText};
  box-shadow: 0 2px 0 ${({ theme }) => (theme as ThemeType).colors.FunKeyShadow};
  border-radius: 8px;
  cursor: pointer;
  margin: 0;
  background: ${({ theme }) => (theme as ThemeType).colors.FunKeyBg};
  grid-column: 1 / span 2;
  text-transform: uppercase;

  &:active {
    box-shadow: 0 0px 0
      ${({ theme }) => (theme as ThemeType).colors.FunKeyShadow};
    margin-top: 2px;
    margin-bottom: -2px;
  }
`;

const EqualKey = styled.button<Props>`
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  padding: 10px 0;
  border: none;
  color: ${({ theme }) => (theme as ThemeType).colors.EqualKeyText};
  box-shadow: 0 2px 0
    ${({ theme }) => (theme as ThemeType).colors.EqualKeyShadow};
  border-radius: 8px;
  cursor: pointer;
  margin: 0;
  background: ${({ theme }) => (theme as ThemeType).colors.EqualKeyBg};
  grid-column: 3 / span 2;
  text-transform: uppercase;

  &:active {
    box-shadow: 0 0px 0
      ${({ theme }) => (theme as ThemeType).colors.EqualKeyShadow};
    margin-top: 2px;
    margin-bottom: -2px;
  }
`;

export { StyledKeypad, NormalKey, FunKey, ResetKey, EqualKey };
