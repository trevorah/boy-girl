var boys = require('./boys-names');
var girls = require('./girls-names');

module.exports = function(name) {
  var lowercase = name.toLowerCase();
  
  // "Big O" notation? more like "Big No" notation!
  // Seriously though, this is crazy inefficient
  var isBoyName = boys.indexOf(lowercase) >= 0;
  var isGirlName = girls.indexOf(lowercase) >= 0;

  if(isBoyName && isGirlName) {
    return 'ambiguous';
  } else if(isBoyName) {
    return 'boy';
  } else if(isGirlName) {
    return 'girl';
  } else {
    return 'neither';
  }
};

