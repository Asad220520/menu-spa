import React from "react";
import HeaderBottom from "../../components/headerBottom/HeaderBottom";
import About from "../about/About";
import Menu from "../menu/Menu";
import Interior from "../interior/Interior";
import Contacts from "../contacts/Contacts";

const HomePage = () => {
  return (
    <div>
      <HeaderBottom />
      <About />
      <Menu />
      <Interior />
      <Contacts />
    </div>
  );
};

export default HomePage;
