function wave(str) {
  let results = [];
  let word = [...str];
  if (str === []) {
    results = "";
  } else {
    for (let i = 0; i < str.length; i++) {
      let waveWord = [...word];
      if (waveWord[i] === " ") {
        false;
      } else {
        waveWord[i] = waveWord[i].toUpperCase();

        console.log("result joined....", waveWord);

        results.push(waveWord.join(""));
      }
    }
  }
  return results;
}

// Best practice
function bestWave(str) {
  let result = [];

  str.split("").forEach((char, index) => {
    // RegExp.prototype.test()
    if (/[a-z]/.test(char)) {
      result.push(
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
      );
    }
  });

  return result;
}
