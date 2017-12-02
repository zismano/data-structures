var BinarySearchTree = function(value) {
  //var obj = Object.create(BinarySearchTree.prototype);
  var obj = {};
  _.extend(obj, BinarySearchTree);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

// comlexity O(log n)
BinarySearchTree.insert = function(value) {
  var newNode = BinarySearchTree(value);
  // if value < tree-root.value
  var tree = this;
  if (value < tree.value) {
    // if tree-root.left is not null 
    if (tree.left) {
      // this.left.insert(value)
      tree.left.insert(value);
    } else {
      // root.left = newNode
      tree.left = newNode;
    }
  // else then value > tree
  } else if (value > tree.value) {
    // if tree-root.right is not null 
    if (tree.right) {
      // this.right.insert(value)
      tree.right.insert(value);
    } else {
      // root.right = newNode
      tree.right = newNode;
    }
  } 
};

// complexity O(log n)
BinarySearchTree.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (this.left) {
      return this.left.contains(value);   
    } else {
      return false;  
    }
  } else if (value > this.value) {
    if (this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
};

// complexity linear
BinarySearchTree.depthFirstLog = function(cb) {
  if (this.value) {
    cb(this.value);
  }
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */
