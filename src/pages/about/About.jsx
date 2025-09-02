import React from "react";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";
import left from "../../assets/icons/left.svg";

const About = () => {
  return (
    <div>
      <SectionHeader title="About Us" leftIcon={left} />
      <SectionHeader title="Best Sellers" leftIcon={left} />
    </div>
  );
};

export default About;
