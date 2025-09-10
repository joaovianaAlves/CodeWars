function mormons(startingNumber, reach, target) {
  let missions = 0;
  while (startingNumber < target) {
    startingNumber += startingNumber*reach;
    missions++;
  }
  return missions;
}
