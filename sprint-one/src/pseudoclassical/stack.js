var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sz = 0;
};

Stack.prototype.push = function(val) {
  this[this.sz] = val;
  this.sz++;
};

Stack.prototype.pop = function() {
  var temp = this[this.sz - 1];
  if (temp) {
    delete this[this.sz - 1];
    this.sz--;
    return temp;
  }
};

Stack.prototype.size = function() {
  return this.sz;
};



