var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create a new queue object
  var queueMaker = {};
  // key size of queue object init
  queueMaker.sz = 0;
  // extend methods of queue object with queueMethods
  _.extend(queueMaker, queueMethods);
  // return queueu object
  return queueMaker;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  for (var i = this.sz; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = val;
  this.sz++;
};

queueMethods.dequeue = function() {
  var temp = this[this.sz - 1];
  if (temp) {
    delete this[this.sz - 1];
    this.sz--;
    return temp;
  }
};

queueMethods.size = function() {
  return this.sz;
};