import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../redux";
import {
  StyledKeypad,
  NormalKey,
  FunKey,
  ResetKey,
  EqualKey,
} from "./styles/Keypad.styled";

const key = [
  "7",
  "8",
  "9",
  "DEL",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "x",
];

const Keypad = () => {
  const dispatch = useDispatch();
  const pushNumber = useCallback(
    (num: string) => [dispatch(actions.calc.pushNumber(num))],
    []
  );
  const delNumber = useCallback(() => dispatch(actions.calc.delNumber()), []);
  const calc = useCallback((method: string) => {
    dispatch(actions.calc.calc(method));
  }, []);
  const equal = useCallback(() => dispatch(actions.calc.equal()), []);
  const reset = useCallback(() => dispatch(actions.calc.reset()), []);

  return (
    <StyledKeypad>
      {key.map((value, i) => {
        switch (value) {
          case "DEL":
            return (
              <FunKey key={i} onClick={delNumber}>
                {value}
              </FunKey>
            );
          case "+":
          case "-":
          case "x":
          case "/":
            return (
              <NormalKey key={i} isNumber={false} onClick={() => calc(value)}>
                {value}
              </NormalKey>
            );
          default:
            return (
              <NormalKey
                key={i}
                isNumber={true}
                onClick={() => pushNumber(value)}
              >
                {value}
              </NormalKey>
            );
        }
      })}
      <ResetKey onClick={reset}>Reset</ResetKey>
      <EqualKey onClick={equal}>=</EqualKey>
    </StyledKeypad>
  );
};

export default Keypad;
