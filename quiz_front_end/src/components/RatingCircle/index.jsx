import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './RatingCircle.css';

class RatingCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentQuestion = 1, sqSize, strokeWidth, totalQuestions = 5 } = this.props;
    const percentage = (currentQuestion / totalQuestions) * 100;
    // Size of the enclosing square
    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (sqSize - strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - dashArray * percentage / 100;

    return (
      <svg
        width={sqSize}
        height={sqSize}
        viewBox={viewBox}>
        <circle
          className="circle-background"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`} />
        <circle
          className="circle-progress"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }} />
        <text
          className="circle-text"
          x="40%"
          y="40%"
          dy=".5em"
          textAnchor="middle">
          {`${currentQuestion}`}
        </text>
        <text
          className="circle-text-total"
          x="60%"
          y="50%"
          dy=".5em"
          dx='0.3em'
          textAnchor="middle">
          {`  /${totalQuestions}`}
        </text>
      </svg>
    );
  }
}

// Define PropTypes for the component
RatingCircle.propTypes = {
  currentQuestion: PropTypes.number,  // The current question number (optional)
  sqSize: PropTypes.number,           // The size of the square (required)
  strokeWidth: PropTypes.number,      // The width of the stroke (required)
  totalQuestions: PropTypes.number    // The total number of questions (optional)
};

// Define default props for the component
RatingCircle.defaultProps = {
  sqSize: 120,
  strokeWidth: 10,
  totalQuestions: 5,
  currentQuestion: 1
};

export default RatingCircle;
