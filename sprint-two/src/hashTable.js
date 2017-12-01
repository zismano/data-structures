var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // track tuple count
  this.tupleCt = 0;
};

HashTable.prototype.insert = function(k, v) {
  // takes key into hash function and creates an index
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create new tuple = [k, v]
  // check this.set[index] is undefined
    // if so, create new bucket
      // push new tuple to new bucket 
    // else, push new tuple to existing bucket
  // tupleCt++
  // check if tupleCt/limit > 75%
  //  if so, create new array and push all tuples in
      // delete all buckets
      // multiply limit by 2
      // insert all tuples
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var buckets = this.get[index];
  for (var i = 0; i < buckets.length; i++) {
    if (buckets[i][0] === k) {
      return buckets[i][1];
    }
  }
  return false;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
