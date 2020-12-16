arr = [
  ["Bob", "Nora"],
  ["Carl", "Ruby"],
];

function binRota(arr) {
  debugger;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      }
    } else {
      for (let k = arr[i].length - 1; k >= 0; k--) {
        newArr.push(arr[i][k]);
      }
    }
  }
  return newArr;
}
