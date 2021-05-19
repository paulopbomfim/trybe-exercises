const triangleAngle = (angleOne, angleTwo, angleThree) => {
  const isTriangle = [angleOne, angleTwo, angleThree];

  for (let index = 0; index < isTriangle.length; index += 1) {
    if (isTriangle[index] < 0 || (angleOne + angleTwo + angleThree) > 180) {
      return false;
    }
  }

  return true;
}

const resultFunction = (angleOne, angleTwo, angleThree, action) => {
  const result = action(angleOne, angleTwo, angleThree);
  console.log(`Is a triangle: ${result}`);
}

resultFunction(30, 60, 90, triangleAngle)
resultFunction(45, 45, 90, triangleAngle)
resultFunction(90, 90, 90, triangleAngle)
resultFunction(30, -60, 90, triangleAngle)