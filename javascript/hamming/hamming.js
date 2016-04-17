var hamming = function(pairOne, pairTwo) {

  var ham = 0;

  for (x = 0, y= 0; x <= pairOne.length, y<= pairTwo.length ;x++, y++) {
    if (x != y) {
      ham++;
    } 
  }

  return ham;

};

module.exports = hamming;
