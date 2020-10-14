// Applied reduce in filter example, skylabersList
const skylabers = [
  { name: "Gerard", city: "Barcelona" },
  { name: "Santi", city: "Buenos Aires" },
  { name: "Gemma", city: "Barcelona" },
];

const barcelonaSkylabers = skylabers.reduce((acc, currVal) => {
  if (currVal.city === "Barcelona") {
    acc = [...acc, currVal];
  }
  console.log("this is acc", acc);
  return acc;
}, []);

console.log("final result -----", barcelonaSkylabers);
