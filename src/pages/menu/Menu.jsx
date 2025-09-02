import React from "react";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";
import left from "../../assets/icons/left.svg";
import FancyButton from "../../components/ui/Buttons/FancyButton";

const Menu = () => {
  return (
    <div>
      <SectionHeader title="Main Menu" leftIcon={left} both />
      <FancyButton label="View Full Menu" to="/menu/full" />
    </div>
  );
};

export default Menu;
