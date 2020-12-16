function getCount(str) {
  let vowelsCount = 0;

  str.split("").map((el) => {
    if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u")
      return vowelsCount++;
  });

  return vowelsCount;
}
