function upArray(arr) {
  if (!arr.every((v) => v >= 0) || arr.length === 0) return null;
  if (arr.some((v) => v.toString().length > 1)) return null;
  let arr1 = [];
  for (let i = 0; i < arr.length; i += 15) {
    arr1.push(arr.slice(i, i + 15));
  }
  arr1[arr1.length - 1] = arr1[arr1.length - 1].join("") * 1 + 1;
  arr1 = arr1.map((v) => (Array.isArray(v) ? v.join("") * 1 : v));
  return arr1
    .join("")
    .split("")
    .map((v) => v * 1);
}
