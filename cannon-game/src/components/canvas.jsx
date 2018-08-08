import React from 'react';

const Canvas = () => {
  const style = {
    border: 'black 1px solid'
  };


  return (
    <svg
      id="aliens-leave-canvas"
      preserveAspectRatio="xMazYMax none"
      style={style}
    >

    <circle cx={0} cy={0} r={50} />

    </svg>
  );
};

export default Canvas;
