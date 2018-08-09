import React from 'react';
import PropTypes from 'prop-types';

const FlyingSaucerBase = (props) => {
  const flyingSaucerBaseStyling = {
    fill: '#979797',
    stroke: '#5c5c5c',
  }


  return (
    <ellipse 
      cx={props.position.x}
      cy={props.position.y}
      rx="40"
      ry="40"
      style={flyingSaucerBaseStyling}
    />
  );
};

flyingSaucerBaseStyling.PropTypes = {
  postion: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  })
};

export default FlyingSaucerBase;

