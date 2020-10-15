const skylabersList = require("./skylaberList.mock");
// Applied REDUCE in filter example, skylabersList

const sabadellReduceSkylabers = skylabersList.reduce((acc, currVal) => {
  if (currVal.address.city === "Sabadell") {
    acc = [...acc, currVal];
  }
  return acc;
}, []);

console.log("Final __reduce__ Result ==>", sabadellReduceSkylabers);

// Applied FILTER in filter example, skylabersList

const sabadellFilterSkylabers = skylabersList.filter(
  (currVal) => currVal.address.city === "Sant Celoni"
);

console.log("Final __filter__ Result ==>", sabadellFilterSkylabers);
