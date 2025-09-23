import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";
import left from "../../assets/icons/left.svg";
import FancyButton from "../../components/ui/Buttons/FancyButton";
const HeaderBottom = () => {
  return (
    <div>
      <SectionHeader title="Delicious" leftIcon={left} both />
      <FancyButton label="Reserve Your Table" />
    </div>
  );
};

export default HeaderBottom;
