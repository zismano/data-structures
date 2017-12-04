var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; 
  return set;
};

var setPrototype = {};

// complexity is constant
// takes any string and adds it to the set
setPrototype.add = function(item) {
  // new property inside storage (item : true)
  this._storage[item] = true;
};

// complexity is constant
// takes any string and returns a boolean reflecting whether it can be found in the set
setPrototype.contains = function(item) {
  // if key item in set, return true. Otherwise, return false
  return this._storage[item] ? true : false;
};

// complexity is constant
// takes any string and removes it from the set, if present
setPrototype.remove = function(item) {
  // delete key item
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
