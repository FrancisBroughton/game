import React from 'react';
import PropTypes from 'prop-types';
import { bezierCurve } from '../utils/bezierCurve';

const FlyingSaucerTop = (props) => {
  const flyingSaucerTopStyling = {
    fill: '#b6b6b6',
    stroke: '#7d7d7d',
  };

  const baseSize = 40;
  const halfBase = 20;
  const height = 25;

  const cubicBezierCurve = {
    initialAxis: {
      x: props.position.x - halfBase,
      y: props.position.y,
    },

    initialControlPoint: {
      x: 10,
      y: -height,
    },

    endingControlPoint: {
      x: 30,
      y: -height,
    },

    endingAxis: {
      x: baseSize,
      y: 0,
    },
  };

  return (
    <path 
      style={flyingSaucerTopStyling}
      d={bezierCurve(cubicBezierCurve)}
    />
  );
};

FlyingSaucerTop.PropTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

export default FlyingSaucerTop;
