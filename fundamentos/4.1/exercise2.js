const compareHigherNumber = (numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    return numberOne;
  }

  return numberTwo;
}

const result = (numberOne, numberTwo, action) => {
  const result = action(numberOne, numberTwo)
  console.log(`the highest number is: ${result};`)
}

result(5000, 100, compareHigherNumber);
result(5000, 8000, compareHigherNumber);

