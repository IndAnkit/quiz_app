import PropTypes from "prop-types";
import Checked from "assets/Checked.svg";
import UnChecked from "assets/UnChecked.svg";

const RadioButton = ({ isSelected }) => {
  return (
    <img
      className="h-6 w-6"
      src={isSelected ? Checked : UnChecked}
      alt="radio button"
    />
  );
};

RadioButton.propTypes = {
  isSelected: PropTypes.bool,
};

export default RadioButton;
