// Applied reduce in filter example, skylabersList

const skylabersList = require("./skylaberList.mock");

const sabadellSkylabers = skylabersList.reduce((acc, currVal) => {
  if (currVal.address.city === "Sabadell") {
    acc = [...acc, currVal];
  }
  return acc;
}, []);

console.log("Final Result ==>", sabadellSkylabers);
