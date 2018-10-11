const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return result;
};

Traveller.prototype.getModesOfTransport = function () {
  const result = this.journeys.map((journey) => {
    return journey.transport;
  });
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey) => {
      return journey.transport === transport;  //don't need to put it in if condition as the filter enumeration will use it as a criteria to return the journey
  });
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // Using Sets
  return Array.from(new Set (this.getModesOfTransport()));

  //Using Filter Enumeration
  // return this.getModesOfTransport().filter((transport, index, allTransports) =>
  // (allTransports.indexOf(transport) === index));

};


module.exports = Traveller;
