import PropTypes from "prop-types";
import RadioButton from "./RadioButton";

const Option = ({  text,  choice_id, onSelect, isSelected }) => {
  return (
    <div
      onClick={() => {
        onSelect && onSelect(choice_id);
      }}
      className={`select-none flex border-2  cursor-pointer gap-4 hover:bg-green-100 font-medium rounded-lg p-4 ${
        isSelected ? "border-borderGreen " : "border-transparent"
      }`}
    >
      <RadioButton isSelected={isSelected} />
      <span>{text}</span>
    </div>
  );
};

Option.propTypes = {
  text: PropTypes.string.isRequired,
  choice_id: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export default Option;
