function getClaimedArea(claim) {
  [, startX, startY, width, height] = claim.match(/(\d+)/g).map(Number);

  var area = [];
  for (i = startY + 1; i <= startY + height; i++) {
    for (j = startX + 1; j <= startX + width; j++) {
      area.push({ x: j, y: i });
    }
  }

  return area;
}

function getNumberOfOverlappingClaims(claims) {
  var areas = claims.map(claim => getClaimedArea(claim));

  var areasWithNumberOfClaims = areas
    .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
    .reduce((map, coord) => {
      var key = JSON.stringify(coord);
      map[key] = map[key] !== undefined ? map[key] + 1 : 1;
      return map;
    }, {});

  return Object.values(areasWithNumberOfClaims).filter(element => element >= 2)
    .length;
}

function getClaimWithNoOverlap(claims) {
  let areas = claims.map(claim => getClaimedArea(claim));

  let areasWithNumberOfClaims = areas
    .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
    .reduce((map, coord) => {
      var key = JSON.stringify(coord);
      map[key] = map[key] !== undefined ? map[key] + 1 : 1;
      return map;
    }, {});

  let claimNumber = 0;
  let claimWithoutOverlap;
  areas.forEach(claim => {
    claimNumber++;
    let hasClaimWithNoOverlap = claim.every(value => {
      return areasWithNumberOfClaims[JSON.stringify(value)] === 1;
    });
    if (hasClaimWithNoOverlap) {
      claimWithoutOverlap = claimNumber;
    }
  });

  return claimWithoutOverlap;
}

module.exports = {
  getClaimedArea,
  getNumberOfOverlappingClaims,
  getClaimWithNoOverlap,
};
