const { nextISSTimesForMyLocation } = require("./iss");

const printPassTimes = function(array) {
  for (const item of array) {
    const date = new Date(item.risetime * 1000);
    console.log(`Next pass at ${date} for ${item.duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  printPassTimes(data);
});