const addition = (numberOne, numberTwo) => {
  return numberOne + numberTwo;
}

const subtraction = (numberOne, numberTwo) => {
  return numberOne - numberTwo;
}

const multiplication = (numberOne, numberTwo) => {
  return numberOne * numberTwo;
}

const division = (numberOne, numberTwo) => {
  return numberOne / numberTwo;
}

const modulus = (numberOne, numberTwo) => {
  return numberOne % numberTwo;
}

const calculator = (numberOne, numberTwo, operation) => {
  const result = operation(numberOne, numberTwo);
  console.log(result);
}

calculator(10, 2, addition)
calculator(10, 2, subtraction)
calculator(10, 2, multiplication)
calculator(10, 2, division)
calculator(10, 2, modulus)