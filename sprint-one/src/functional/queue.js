var Queue = function() {
  var sz = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add a string to the back of the queue
    storage[sz] = value;
    sz++;
  };

  someInstance.dequeue = function() {
    // remove and return the str at the front of the queue
    var temp = storage[0] || '';
    if (delete storage[0]) {
      return temp;
    }
  };

  someInstance.size = function() {
    // return the number of items in the queue
  };

  return someInstance;
};
