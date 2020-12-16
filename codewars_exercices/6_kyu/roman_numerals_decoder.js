function solution(roman) {
  const array = roman.match(/IV|\w/g);
  // array2= roman.match(/CM|CD|XC|XL|IX|IV|\w/g)
  let total = 0;
  const arrayNum = array.map((element) => {
    switch (element) {
      case "I":
        element = 1;
        break;
      case "IV":
        element = 4;
        break;
      case "V":
        element = 5;
        break;
      case "X":
        element = 10;
        break;
      case "L":
        element = 50;
        break;
      case "C":
        element = 100;
        break;
      case "D":
        element = 500;
        break;
      case "M":
        element = 1000;
        break;
      default:
        break;
    }
    return element;
  });

  arrayNum.forEach((value) => {
    total += +value;
    return total;
  });

  return total;
}
