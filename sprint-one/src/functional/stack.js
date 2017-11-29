var Stack = function() {
  var sz = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // Add a string to the top of the stack
    someInstance[sz] = value;
    sz++;
  };

  someInstance.pop = function() {
    // Remove and return the string on the top of the stack

    var temp = someInstance[sz - 1];
    
    if (delete someInstance[sz - 1]) {
      if (sz > 0) {
        sz--;
      }
    }
    return temp;
  };

  someInstance.size = function() {
    // Return the number of items on the stack
    return sz;
  };

  return someInstance;
};
