import React from 'react';
import PropTypes from 'prop-types';

const FlyingSaucerBase = (props) => {
  const flyingSaucerStyling = {
    fill: '#979797',
    stroke: '#5c5c5c',
  }


  return (
    <ellipse 
      cx={props.position.x}
      cy={props.position.y}
      rx="40"
      ry="10"
      style={flyingSaucerStyling}
    />
  );
};

FlyingSaucerBase.PropTypes = {
  postion: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  })
};

export default FlyingSaucerBase;

