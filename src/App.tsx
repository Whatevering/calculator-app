import Display from "./components/Display";
import Header from "./components/Header";
import Keypad from "./components/Keypad";
import Container from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Display />
        <Keypad />
      </Container>
    </>
  );
}

export default App;
