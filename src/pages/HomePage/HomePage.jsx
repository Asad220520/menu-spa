import React from "react";
import HeaderBottom from "../../components/headerBottom/HeaderBottom";
import About from "../about/About";
import Menu from "../menu/Menu";
import Interior from "../interior/Interior";
import Contacts from "../contacts/Contacts";
// import FullMenu from "../menu/fullMenu/FullMenu";
import ErrorBoundary from "../menu/fullMenu/ErrorBoudary";

const HomePage = () => {
  return (
    <div>
      <HeaderBottom />
      <About />
      <ErrorBoundary>
        <Menu />
        {/* <FullMenu /> */}
      </ErrorBoundary>
      <Interior />
      <Contacts />
    </div>
    <>
      <div className="header-wrapper">
        <HeaderBottom />
      </div>
      <div className="container">
        <About />
        <Menu />
        <Interior />
        <Contacts />
      </div>
    </>
  );
};

export default HomePage;
