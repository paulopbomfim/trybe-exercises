const verifyNumber = (value) => {
  if (value > 0) {
    return 'positive'
  }

  if (value < 0) {
    return 'negative'
  }

  return '0'
}

const resultFunction = (value, action) => {
  const result = action(value);
  console.log(`The number is ${result}`)
}

resultFunction(2, verifyNumber)
resultFunction(-3, verifyNumber)
resultFunction(0, verifyNumber)