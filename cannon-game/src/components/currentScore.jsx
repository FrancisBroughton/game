import React from 'react';
import PropTypes from 'prop-types';

const CurrentScore = (props) => {
  const currentScoreStyling = {
    fontFamily:  '"Merriweather", serif',
    fontSize: 80,
    fill: '#d65c3e',
  };

  return (
    <g filter="url((#shadow)">
      <text style={currentScoreStyling} x="300" y="80">
        {props.score}
      </text>
    </g>
  );
};

CurrentScore.PropTypes = {
  score: PropTypes.number.isRequired
};

export default CurrentScore;