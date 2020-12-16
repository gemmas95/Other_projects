var number = function (array) {
  return (newArray = array.map(function (element, index) {
    return `${index + 1}: ${element}`;
  }));
};
