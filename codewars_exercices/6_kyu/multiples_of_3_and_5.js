function solution(number) {
  let result = 0;

  for (let i = 1; i < number; i++) {
    let isMultiple = 0;
    if (i % 3 === 0) {
      isMultiple = i;
    } else if (i % 5 === 0) {
      isMultiple = i;
    }
    result += isMultiple;
  }
  return result;
}

// Best practice
function bestSolution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
