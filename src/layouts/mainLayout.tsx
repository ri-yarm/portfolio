import React from "react";
import Header from "../components/Header/Header";
import Marquee from "../components/Marquee/Marquee";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import ConsoleView from "../components/ConsoleView/ConsoleView";

const MainLayout = () => (
  <>
    <Header />
    <Marquee />
    <Main />
    <Footer />
    <ConsoleView />
  </>
);

export default React.memo(MainLayout);
