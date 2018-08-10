import React from 'react';
import { bezierCurve } from '../utils/bezierCurve';

const GameTitle = () => {
  const gameTitleStyling = {
    fontFamily: '"Merriweather", serif',
    fontSize: 120,
    fill: '#cbca62',
  };

  const aliensLineCurve = {
    initialAxis: {
      x: -190,
      y: -950,
    },
    initialControlPoint: {
      x: 95,
      y: -50,
    },
    endingControlPoint: {
      x: 285,
      y: -50,
    },
    endingAxis: {
      x: 380,
      y: 0,
    },
  };

  const goHomeLineCurve = {
    ...aliensLineCurve,
    initialAxis: {
      x: -250,
      y: -780,
    },
    initialControlPoint: {
      x: 125,
      y: -90,
    },
    endingControlPoint: {
      x: 375,
      y: -90,
    },
    endingAxis: {
      x: 500,
      y: 0,
    },
  };

  return (
    <g filter="url(#shadow)">
      <defs>
        <path
          id="AliensPath"
          d={bezierCurve(aliensLineCurve)}
        />
        <path
          id="GoHomePath"
          d={bezierCurve(goHomeLineCurve)}
        />
      </defs>
      <text {...gameTitleStyling}>
        <textPath xlinkHref="#AliensPath">
          Aliens,
        </textPath>
      </text>
      <text {...gameTitleStyling}>
        <textPath xlinkHref="#GoHomePath">
          are here!
        </textPath>
      </text>
    </g>
  );
};

export default GameTitle;
