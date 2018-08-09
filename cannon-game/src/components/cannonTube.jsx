import React from 'react';
import { bezierCurve } from '../utils/bezierCurve';
import PropTypes from 'prop-types';

const CannonTube = (props) => {
  const cannotTubeStyling = {
    fill: '#999',
    stroke: '#666',
    strokeWidth: '2px',
  };

  const transform = `rotate(${props.rotation}, 0, 0)`;

  const exitWidth = 40;
  const halfExit = 20;
  const height = 100;
  const yBasis = 70;

  const cubicBezierCurve = {
    initialAxis: {
      x: -halfExit,
      y: -yBasis,
    },

    initialControlPoint: {
      x: -40,
      y: height * 1.7,
    },

    endingControlPoint: {
      x: 80,
      y: height * 1.7,
    },

    endingAxis: {
      x: exitWidth,
      y: 0
    },
  };

  return (
    <g transform={transform}>
      <path 
        style={cannotTubeStyling}
        d={bezierCurve(cubicBezierCurve)}
      />

      <line 
        x1={-halfExit}
        y1={-yBasis}
        x2={halfExit}
        y2={-yBasis}
        style={cannotTubeStyling}
      />
    </g>
  );
};

CannonTube.PropTypes = {
  rotation: PropTypes.number.isRequired,
};

export default CannonTube;
