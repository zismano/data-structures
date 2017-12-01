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
  var newTuple = [k, v];
  var bucket = this._storage.get(index);
  // check this.get[index] is undefined
  if (bucket === undefined) {
    // if so, create new bucket        // push new tuple to new bucket 
    this._storage.set(index, [newTuple]);
  } else {
    // else, push new tuple to existing bucket
    var notFound = true;
    for (var i = 0; i < bucket.length && notFound; i++) {
      if (bucket[i][0] === k) {
        notFound = false;
        bucket[i][1] = v;
      }
    }
    if (notFound) {
      bucket.push(newTuple);   
    }
  }
  // increase tuple counter  
  this.tupleCt++;
  // check if tupleCt/limit > 75%
  if (this.tupleCt / this._limit * 100 >= 75) {
    //  if so, create new array and push all tuples in
    reallocateTuples('increase'); 
  }
};

var reallocateTuples = function(slope) {
  var allTuples = [];  
  this._storage.each(function(bucket) {
    bucket.each(function(tuple) {
      allTuples.push(tuple);
    });
    bucket = [];
  });
  this._limit *= slope === 'increase' ? 2 : 0.5;
  var hashT = this;
  _.each(allTuples, function(item) {
    hashT.insert(item[0], item[1]);
  }); 
}; 

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var buckets = this._storage.get(index);
  for (var i = 0; i < buckets.length; i++) {
    if (buckets[i][0] === k) {
      return buckets[i][1];
    }
  }
  return false;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get buckets of storage's index
  // iterate on buckets array to find tuple with k key
  // pop tuple from bucket
  // decrease tuple counter
  // check if ratio tuples and storage length is less than 25%
    // if so, create new array and push all tuples in
    // delete all buckets
    // divide limit by 2
    // insert all tuples

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
