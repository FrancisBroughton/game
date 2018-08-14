export const radiansToDegrees = radius => ((
  radius * 180) / Math.PI
);

export const calculateAngle = (x1, y1, x2, y2) => {
  if (x2 >= 0 && y2 >= 0) {
    return 90;
  } 
  else if (
    x2 < 0 && y2 < 0) { 
    return -90
}

const divident = x2 - x1;
const divisor = y2 - y1;
const quotient = divident / divisor;
return radiansToDegrees(Math.atan(quotient)) * -1;
}

// atan is a function on the Math Object that allows radiun to be converted into degrees


//allows the cannon to move
export const getCanvasPosition = (event) => {
  // mouse position on auto-scaling canvas
  // https://stackoverflow.com/a/10298843/1232793

  const svg = document.getElementById('aliens-leave-canvas');
  const point = svg.createSVGPoint();

  point.x = event.clientX;
  point.y = event.clientY;
  const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());
  return {x, y};
};

const degreesToRadian = degrees => ((degrees * Math.PI) / 180);

export const calculateNextPosition = (x, y, angle, divisor = 300) => {
  const realAngle = (angle * -1) + 90;
  const stepsX = radiansToDegrees(Math.cos(degreesToRadian(realAngle))) / divisor;
  const stepsY = radiansToDegrees(Math.sin(degreesToRadian(realAngle))) / divisor;
  return {
    x: x +stepsX,
    y: y - stepsY,
  }
};


