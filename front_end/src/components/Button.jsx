import PropTypes from "prop-types";
import Spinner from "./Spinner";

const Button = ({ isLoading, disabled, children, onClick, className }) => {
  return (
    <button
      disabled={disabled}
      className={`flex items-center ${
        isLoading ? "pointer-events-none cursor-not-allowed" : "disabled:opacity-40"
      } cursor-pointer disabled:cursor-not-allowed px-4 w-full md:w-56 py-2 rounded-full bg-primaryColor text-white ${className}`}
      onClick={onClick}
    >
      {isLoading && <Spinner />}
      <div className="flex-1">
      {children}
      </div>

    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
