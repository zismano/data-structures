var Queue = function() {
  var sz = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add a string to the back of the queue
    someInstance[sz] = value;
    sz++;
  };

  someInstance.dequeue = function() {
    // remove and return the str at the front of the queue
    var i = 0;
    var temp = someInstance[0];
    if (delete someInstance[0]) {
      if (sz > 0) {
        sz--;
      }
      for (var key in someInstance) {
        someInstance[i] = someInstance[key];
        i++;
      }
      return temp;
    }
  };

  someInstance.size = function() {
    // return the number of items in the queue
    return sz;
  };

  return someInstance;
};
