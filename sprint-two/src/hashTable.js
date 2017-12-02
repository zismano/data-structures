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
  // check if this.get[index] is undefined
  if (bucket === undefined) {
    // if so, create new bucket and push new tuple to new bucket 
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
    this.reallocateTuples('increase'); 
  }
};

HashTable.prototype.reallocateTuples = function(slope) {
  var allTuples = [];  
  this._storage.each(function(bucket) {
    if (bucket !== undefined) {
      _.each(bucket, function(tuple) {
        allTuples.push(tuple);
      });
      bucket = [];    
    }
  });
  this.tupleCt = 0;
  this._limit *= slope === 'increase' ? 2 : 0.5;

  this._storage = LimitedArray(this._limit);
  var hashT = this;
  _.each(allTuples, function(item) {
    hashT.insert(item[0], item[1]);
  }); 
}; 

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var buckets = this._storage.get(index);
  for (var i = 0; buckets && i < buckets.length; i++) {
    if (buckets[i][0] === k) {
      return buckets[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get buckets of storage's index
  var bucket = this._storage.get(index);
  // iterate on buckets array to find tuple with k key
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      // delete tuple from bucket
      bucket.splice(i, 1);
      break;  
    }
  }
  // decrease tuple counter
  this.tupleCt--;
  // check if ratio tuples and storage length is less than 25%
  // new limit of storage, and reassign tuples
  if (this.tupleCt / this._limit * 100 < 25) {
    this.reallocateTuples('decrease');
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
