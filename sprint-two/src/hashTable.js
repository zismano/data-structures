

var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var newNode = {
    key: k,
    val: v,
    next: null
  };


  var obj = this;
  var bucket = this._storage.get(index);

  var search = function(bucket) {
    if (bucket === undefined) {
      obj._storage.set(index, newNode);
      obj._size++;
      if (Math.round(obj._size / obj._limit * 10000) / 100 >= 75) {
        obj._limit *= 2;
      }
      console.log((Math.round(obj._size / obj._limit * 10000) / 100 + 'and' + obj._limit));
    } else {
      if (bucket.key === k) {
        bucket.val = v;
      } else if (bucket.next === null) {
        bucket.next = newNode;
      } else {
        search(bucket.next);
      }
    }
  };

  search(bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (!bucket) {
    return undefined;
  }

  var search = function(bucket) {
    if (bucket.key === k) {
      return bucket.val;
    } else {
      if (bucket.next !== null) {
        return search(bucket.next);
      }
    }
  };

  return search(bucket);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket !== undefined) {
    if (bucket.next === null) {
      index = getIndexBelowMaxForKey(k, this._limit);
      this._storage.set(index, undefined);
      this._size--;
      if (Math.round(this._size / this._limit * 10000) / 100 <= 25) {
        this._limit /= 2;
      }
      console.log(Math.round(this._size / this._limit * 10000) / 100 + 'and' + this._limit);
    } else {
      index = getIndexBelowMaxForKey(k, this._limit);
      this._storage.set(index, bucket.next);
      console.log(Math.round(this._size / this._limit * 10000) / 100 + 'and' + this._limit);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


