import PropTypes from 'prop-types';
import './Modal.css'; // Import the CSS file

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Are you sure you want to leave?</h2>
        <button onClick={onClose}>Stay on this page</button>
        <button onClick={() => window.location.reload()}>Leave (Refresh)</button>
      </div>
    </div>
  );
};

// PropTypes validation
Modal.propTypes = {
  onClose: PropTypes.func.isRequired, // `onClose` should be a function and is required
};

export default Modal;
