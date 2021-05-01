let baseNumber = 5;
let spaceNumber = [4];

for (let index = 1; index <= baseNumber; index += 1) {
  let space = spaceNumber[index - 1];
  spaceNumber.push(space - 1);
  console.log(" ".repeat(space) + "*".repeat(index));
}
