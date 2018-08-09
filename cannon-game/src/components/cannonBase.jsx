import React from 'react';
import { bezierCurve } from '../utils/bezierCurve';

const CannonBase = (props) => {
  const cannonBaseStyling = {
    fill: '#a16012',
    stroke: '#75450e',
    strokeWidth: '2px',
  };

  const baseWith = 80;
  const halfBase = 40;
  const height = 60;
  const negativeHeight = height * -1;

  const cubicBezierCurve = { 
    initialAxis: {
      x: -halfBase,
      y: height,
    },

    initialControlPoint: {
      x: 20,
      y: negativeHeight,
    },

    endingControlPoint: {
      x: 60,
      y: negativeHeight,
    },

    endingAxis: {
      x: baseWith,
      y: 0,
    },
  };

  return (
    <g> 
      <path
        style={cannonBaseStyling}
        d={bezierCurve(cubicBezierCurve)}
      />

      <line 
        x1={-halfBase}
        y1={height}
        x2={halfBase}
        y2={height}
        style={cannonBaseStyling}
      />

    </g>
  );
};

export default CannonBase;