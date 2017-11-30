var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueMaker = Object.create(queueMethods);
  queueMaker.sz = 0;
  return queueMaker;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  // this[this.sz] = val;
  // this.sz++;
};

queueMethods.dequeue = function() {
  var temp = this[this.sz - 1];
  //if (temp)
};

queueMethods.size = function() {
  return this.sz;
};

