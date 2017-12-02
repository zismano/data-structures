var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // refers to the parent node or null when there is no node
  newTree.parent = // fix me
  // your code here
  newTree.children = [];  // fix me
  // extend methods from treeMethods to newTree
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// disassociates the tree with its parent (in both directions)
treeMethods.removeFromParent = function() {

};

// Running time of O(1)
treeMethods.addChild = function(value) {
  // takes any value, sets that as the target of a node, and adds that node as a child of the tree
  // push value to given tree
  var newChild = Tree(value);
  this.children.push(newChild);
};

// Running time of O(n)
treeMethods.contains = function(target) {
  // takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
  var found = false;

  var checkContains = function(obj) {
    // if node is target, return true
    if (obj.value === target) {
      found = true;
    } 
    // if not, does node have children
    if (obj.children.length) {
    // yes, apply method on each child
      for (var i = 0; i < obj.children.length && !found; i++) {
        // call recursive func
        checkContains(obj.children[i], target);      
      }
    } 
    return found;
  };
  // invoke recursive func
  return checkContains(this);
};

// 
treeMethods.findNumOfChildren = function(target) {

  var numChildren;

  var numOfChildren = function(obj) {
    // if obj.value is target
    if (obj.value === target) {
    // store length array of obj.children
      numChildren = obj.children.length;
    // else, call recursive function for each one of obj children 
    } else {
      for (var i = 0; i < obj.children.length; i++) {
        numOfChildren(obj.children[i], target);
      }
    }
    return numChildren;
  };
  return numOfChildren(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */