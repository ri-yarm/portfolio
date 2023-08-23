import Main from "./Main/Main";
import Header from "./Header/Header";
import Marquee from "./Marquee/Marquee";
import ConsoleView from "./ConsoleView/ConsoleView";
import Footer from "./Footer/Footer";

import "normalize.css";

function App() {
  return (
    <>
      <Header />
      <Marquee />
      <Main />
      <Footer />
      <ConsoleView />
    </>
  );
}

export default App;
