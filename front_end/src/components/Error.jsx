import PropTypes from 'prop-types'; // Import PropTypes

const Error = ({ error, onRefresh }) => {
  return (
    <div className="p-4 flex items-center bg-red-100 rounded-md">
      <div className="flex-1 text-red-700">{error}</div>
      <button
        className={`text-sm disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed px-2 py-1 rounded-full bg-red-500 text-white`}
        onClick={onRefresh}
      >
        Refresh
      </button>
    </div>
  );
};

// Define PropTypes for the Error component
Error.propTypes = {
  error: PropTypes.string.isRequired,  // The error message (required)
  onRefresh: PropTypes.func.isRequired // The refresh function (required)
};

export default Error;
