import React from 'react';
import { gameFullWidth } from '../utils/constants'

const Sky = () => {
  const skyStyling = {
    fill: '#30abef',
  };

  const gameHeight = 1200;

  return (
    <rect
    style={skyStyling}
    x={gameFullWidth / -2}
    y={100 - gameHeight}
    width={gameFullWidth}
    height={gameHeight}
    />
  );
};

export default Sky;