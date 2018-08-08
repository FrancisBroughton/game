import React from 'react';

const Sky = () => {
  const skyStyling = {
    fill: '#30abef',
  };

  const skyWidth = 5000;
  const gameHeight = 1200;

  return (
    <rect
    style={skyStyling}
    x={skyWidth / -2}
    y={100 - gameHeight}
    width={skyWidth}
    height={gameHeight}
    />
  );
};

export default Sky;