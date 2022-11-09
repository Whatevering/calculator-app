import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { StyledDisplay } from "./styles/Display.styled";

const Display = () => {
  const { current } = useSelector((state: RootState) => state.calc);

  return <StyledDisplay readOnly={true} value={current}></StyledDisplay>;
};

export default Display;
