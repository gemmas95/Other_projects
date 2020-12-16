function findOdd(arr) {
  let result;
  const counterObject = {};

  arr.forEach((num) => {
    if (counterObject[num]) {
      counterObject[num]++;
    } else {
      counterObject[num] = 1;
    }
  });

  for (const property in counterObject) {
    if (counterObject[property] % 2 === 1) {
      result = property;
    }
  }

  return +result;
}
