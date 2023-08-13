import { useAppStyles } from "./App.styles.ts";
import Header from "../Header/Header.tsx";

function App() {
  return (
    <>
      <MainSC>
        <WrapperSC>
          <Header />
          <ContainerSC>
            <TitleSC>
              Hi! I'm <SpanSC>Rinat Yarmukhametov</SpanSC>
            </TitleSC>
            <TitleSC>
              <FrontendTextSC>{"{Front-end}"}</FrontendTextSC> Developer
            </TitleSC>
          </ContainerSC>
        </WrapperSC>
      </MainSC>
    </>
  );
}

const { MainSC, WrapperSC, FrontendTextSC, ContainerSC, SpanSC, TitleSC } =
  useAppStyles();

export default App;
