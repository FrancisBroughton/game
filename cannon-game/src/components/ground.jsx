import React from 'react';
import { gameFullWidth } from '../utils/constants'


const Ground = () => {
  const groundStyling = {
    fill: '#59a941',
  };

  const division = {
    stroke: '#458232',
    strokeWidth: '3px',
  };

  return (
    <g id="ground">
      <rect 
        id="ground-2"
        data-name="ground"
        style={groundStyling}
        x={gameFullWidth / -2}
        y={0}
        width={gameFullWidth}
        height={100}
      />

      <line 
        x1={gameFullWidth / -2}
        y1={0}
        x2={gameFullWidth / 2}
        y2={0}
        style={division}
      />

    </g>
  );
};

export default Ground;