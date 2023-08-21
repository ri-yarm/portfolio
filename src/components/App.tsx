import Main from "./Main/Main";
import Header from "./Header/Header";
import MarqueeUI from "./Marquee/Marquee";
import ConsoleView from "./ConsoleView/ConsoleView";
import NyanCat from "./NyanCatAlive/NyanCat";

function App() {
  return (
    <>
      <ConsoleView />
      <Header />
      <MarqueeUI />
      <Main />
      <NyanCat />
    </>
  );
}

export default App;
