var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // refers to the parent node or null when there is no node
  newTree.parent = null;
  // your code here
  newTree.children = [];
  newTree.valueHolder = null;
  // extend methods from treeMethods to newTree
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// disassociates the tree with its parent (in both directions)
treeMethods.removeFromParent = function(value) {
  // find parent of child
  if (this.contains(value)) {
    let parentsChildren = this.valueHolder.parent.children;
    // remove child from parent's children list
    let index = parentsChildren.indexOf(this.valueHolder);
    parentsChildren.splice(index, 1);
  // return children of child
    return parentsChildren;
  }
};

// should accept a callback and execute it on every value contained in the tree
treeMethods.traverse = function(cb) {
  // if this.value
  if (this.value) {
    // call cb on this.value
    this.value = cb(this.value);
  }
  // if tree has children
  if (this.children.length) {
    // for each child
    this.children.forEach(function(child) {
      // call recursive function
      child.traverse(cb);
    }); 
  }
};

// Running time of O(1)
treeMethods.addChild = function(value) {
  // takes any value, sets that as the target of a node, and adds that node as a child of the tree
  // push value to given tree
  var newChild = Tree(value);
  newChild.parent = this;
  this.children.push(newChild);
};

// Running time of O(n)
treeMethods.contains = function(target) {
  // takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
  var found = false;
  var cur = this;

  var checkContains = function(obj) {
    // if node is target, return true
    if (obj.value === target) {
      found = true;
      cur.valueHolder = obj;
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

//logs the nodes contained in the tree using a breadth-first approach
treeMethods.breadthFirstLog = function() {
  // root = this.children[0]
  // push root to qeueue
  var nodesQueue = [this.children[0]];
  // for loop until end of queue
  for (var i = 0; i < nodesQueue.length; i++) {
  //  if root has children
    if (nodesQueue[i].children) {
      // concat children to queue
      nodesQueue = nodesQueue.concat(nodesQueue[i].children);
    }
    // log elements' value in queue
    console.log(nodesQueue[i].value);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */