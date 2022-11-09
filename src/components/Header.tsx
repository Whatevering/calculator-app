import { useDispatch, useSelector } from "react-redux";
import {
  StyledHeader,
  Title,
  ToggleContainer,
  ToggleNum,
  ToggleNumLayout,
  ToggleSwitch,
  ToggleText,
  ToggleTouchedArea,
  ToggleTouchedAreaLayout,
  ToggleBallMovingArea,
  ToggleBall,
} from "./styles/Header.styled";
import { actions, RootState } from "../redux";
import { useCallback } from "react";

const Header = () => {
  const { mode } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const changeModeTo = useCallback(
    (num: number) => {
      dispatch(actions.theme.changeTo(num));
    },
    [dispatch]
  );
  return (
    <StyledHeader>
      <Title>calc</Title>
      <ToggleContainer>
        <ToggleNumLayout>
          <ToggleNum>1</ToggleNum>
          <ToggleNum>2</ToggleNum>
          <ToggleNum>3</ToggleNum>
        </ToggleNumLayout>
        <ToggleText>Theme</ToggleText>
        <ToggleSwitch>
          <ToggleBallMovingArea>
            <ToggleBall mode={mode} />
          </ToggleBallMovingArea>
          <ToggleTouchedAreaLayout>
            <ToggleTouchedArea onClick={() => changeModeTo(0)} />
            <ToggleTouchedArea onClick={() => changeModeTo(1)} />
            <ToggleTouchedArea onClick={() => changeModeTo(2)} />
          </ToggleTouchedAreaLayout>
        </ToggleSwitch>
      </ToggleContainer>
    </StyledHeader>
  );
};

export default Header;
