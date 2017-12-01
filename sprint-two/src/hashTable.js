

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // for each i in array
  //  if index === i
  //  get elem from index
  // if elem !== undefined
  //  link elem next to newNode
  var newNode = {val: v, next: null};
  
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(val, key, storageArr) {
    if (index === key) {
      storageArr.splice(key, 1);
    }
  });
};

// insert method
//  set(ind, {head: new
//            tail: new})

/*
 * Complexity: What is the time complexity of the above functions?
 */


