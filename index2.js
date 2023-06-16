const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(array) {
  for (const item of array) {
    const date = new Date(item.risetime * 1000);
    console.log(`Next pass at ${date} for ${item.duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then(passTimes => printPassTimes(passTimes))
  .catch(error => console.log("It didn't work: ", error.message));