import styled from "styled-components";
import { ThemeType } from "../theme";

type Props = {
  theme: ThemeType;
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Title = styled.span<Props>`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => (theme as ThemeType).colors.NormalText};
`;

const ToggleContainer = styled.div`
  display: grid;
  grid-template-areas: "none numlayout" "text switch";
  grid-template-columns: min-content 60px;
`;

const ToggleText = styled.span<Props>`
  grid-area: text;
  font-size: 10px;
  color: ${({ theme }) => (theme as ThemeType).colors.NormalText};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transform: scale(0.8);
  font-weight: 600;
  margin-right: 1.3rem;
  margin-top: 2px;
`;

const ToggleNumLayout = styled.div`
  grid-area: numlayout;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 4px;
`;

const ToggleNum = styled.span`
  display: block;
  font-size: 10px;
  color: ${({ theme }) => (theme as ThemeType).colors.NormalText};
  font-weight: 600;
`;

const ToggleSwitch = styled.div<Props>`
  grid-area: switch;
  width: 100%;
  height: 20px;
  border-radius: 60px;
  background: ${({ theme }) => (theme as ThemeType).colors.ToggleBg};
  position: relative;
`;

const ToggleTouchedAreaLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ToggleTouchedArea = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const ToggleBallMovingArea = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 4px;
  transition: all 0.2s;
`;

interface ToggleBallProps extends Props {
  mode: number;
}

const ToggleBall = styled.div<ToggleBallProps>`
  aspect-ratio: 1 / 1;
  height: 100%;
  background: ${({ theme }) => (theme as ThemeType).colors.Toggle};
  border-radius: 8px;
  transition: all 0.2s;
  margin-left: ${({ mode }) => (mode === 0 ? "0" : "auto")};
  margin-right: ${({ mode }) => (mode === 2 ? "0" : "auto")};
`;

export {
  StyledHeader,
  Title,
  ToggleContainer,
  ToggleNumLayout,
  ToggleSwitch,
  ToggleText,
  ToggleNum,
  ToggleTouchedAreaLayout,
  ToggleTouchedArea,
  ToggleBallMovingArea,
  ToggleBall,
};
