import PropTypes from "prop-types";
import RadioButton from "./RadioButton";

const Option = ({ label, id, onSelect, isSelected }) => {
  return (
    <div
      onClick={() => {
        onSelect && onSelect(id);
      }}
      className={`select-none flex border-2  cursor-pointer gap-4 hover:bg-green-100 font-medium rounded-lg p-4 ${
        isSelected ? "border-borderGreen " : "border-transparent"
      }`}
    >
      <RadioButton isSelected={isSelected} />
      <span>{label}</span>
    </div>
  );
};

Option.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Option;
