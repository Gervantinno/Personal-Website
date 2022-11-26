export default function CalculateAngle(x1, y1, x2, y2) {
  let result =
    Math.acos(dist(x1, y1, x2, y1) / dist(x1, y1, x2, y2)) * (180 / Math.PI);

  if (x2 > x1 && y2 < y1) {
    result = 90 - result;
  } else if (x2 > x1 && y2 > y1) {
    result = 90 + result;
  } else if (x2 < x1 && y2 > y1) {
    result = 270 - result;
  } else if (x2 < x1 && y2 < y1) {
    result = 270 + result;
  }

  return result;
}

function dist(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}
