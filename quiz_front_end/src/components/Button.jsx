import PropTypes from "prop-types";

const Button = ({ disabled, children, onClick,className }) => {
  return (
    <button
      disabled={disabled}
      className={`disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed px-4 w-full md:w-56 py-4 rounded-full bg-primaryColor text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className:PropTypes.string
};

export default Button;
