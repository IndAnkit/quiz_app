import PropTypes from 'prop-types';
import './Modal.css'; // Import the CSS file

const Modal = ({ onClose }) => {
  return (
   <></>
  );
};

// PropTypes validation
Modal.propTypes = {
  onClose: PropTypes.func.isRequired, // `onClose` should be a function and is required
};

export default Modal;
