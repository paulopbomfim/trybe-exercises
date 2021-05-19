const compareHigherNumber = (numberOne, numberTwo, numberThree) => {
  if (numberOne > numberTwo && numberOne > numberThree) {
    return numberOne;
  }

  if (numberTwo > numberOne && numberTwo > numberThree) {
    return numberTwo;
  }

  return numberThree;

}

const resultFunction = (numberOne, numberTwo, numberThree, action) => {
  const result = action(numberOne, numberTwo, numberThree);
  console.log(`The highest number is: ${result}`)
}

resultFunction(1000, 500, 250, compareHigherNumber)
resultFunction(1000, 1500, 1250, compareHigherNumber)
resultFunction(1000, 1500, 2250, compareHigherNumber)