function isPangram(string) {
  string = string.toLowerCase();

  // Split the string and convert it to an array, then makes a comprovation that every x (element, item)
  // the index of it do not have to be -1
  // indexOf is an array of string prototype that returns the index position of a given element, and if
  // the element does not exist return -1
  // So if the letter of the abecedary does not exist in the sentence every returns false, ALL elements must
  // have the condition (in some, if one element has the condition returns true)
  return "abcdefghijklmnopqrstuvwxyz".split("").every((x) => {
    return string.indexOf(x) !== -1;
  });
}
