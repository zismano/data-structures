var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackMaker = {};
  stackMaker.sz = 0;
  _.extend(stackMaker, stackMethods);

  return stackMaker;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this[this.sz] = val;
  this.sz++;
};

stackMethods.pop = function() {

};

stackMethods.size = function() {
  return this.sz;
};

// var st = Stack();
// st.push(5)

