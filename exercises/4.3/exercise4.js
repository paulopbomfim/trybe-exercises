let baseNumber = 5;
let spaceNumber = [2];
let counter = 0;

for (let index = 1; index <= baseNumber; index += 2) {
  let space = spaceNumber[counter];
  spaceNumber.push(space - 1);
  console.log(" ".repeat(space) + "*".repeat(index));
  counter += 1;
}
