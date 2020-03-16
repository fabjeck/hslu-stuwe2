const limitRange = (val, range) => {
  return Math.min(Math.max(val, range[0]), range[1]);
};

const map = (val, from, to) => {
  return (val - from[0]) * (to[1] - to[0]) / (from[1] - from[0]) + to[0];
};

const rotate = (x, y) => {
  const angle = Math.atan(y / x) * (180/Math.PI);
  switch (true) {
    case x >= 0 && y >= 0:
      return 90 + angle;
    case x >= 0 && y <= 0:
      return 90 - angle;
    case x <= 0 && y >= 0:
      return -90 - angle;
    case x<= 0 && y <= 0:
      return -90 + angle;
  }
};

export { limitRange, map, rotate }