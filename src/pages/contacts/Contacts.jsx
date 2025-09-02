import React from "react";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";
import left from "../../assets/icons/left.svg";
import FancyButton from "../../components/ui/Buttons/FancyButton";
const Contacts = () => {
  return (
    <div>
      <SectionHeader title="Visit Restaurant" leftIcon={left} />
      <FancyButton
        label="Purchase gift card"
        onClick={() => console.log("gift card")}
      />
    </div>
  );
};

export default Contacts;
