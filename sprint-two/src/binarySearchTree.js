var BinarySearchTree = function(value) {
	var obj = {};
	obj.value = value;
	obj.left = null;
	obj.right = null;
	obj = Object.create(BinarySearchTree.prototype);
	return obj;
};

// accepts a value and places in the tree in the correct position.
BinarySearchTree.prototype.insert = function(value) {
  // newNode = { value: value, left : null, right : null }
  // if value < tree-root.value
	// if tree-root.left is not null
	  // this.left.insert(value)
	// else
	  // root.left = newNode
  // else then value > tree
	// if tree-root.right is not null
	  // this.right.insert(value)
	// else
	  // root.right = newNode
  // else (equals) return;		
};

// accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
BinarySearchTree.prototype.contains = function(value) {
  // if value === tree.root.value
	// return true
  // else if value < tree.root.value
	// if tree.root.left  
	  // this.left.contains(value)
	// else return false
  // else if value > tree.root.value
	// if tree.root.right
	  // this.right.contains(value)
	// else
	  // return false
};
// accepts a callback and executes it on every value contained in the tree.
BinarySearchTree.prototype.depthFirstLog = function(cb) {
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
