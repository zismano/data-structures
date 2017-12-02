

// Instantiate a new graph
var Graph = function() {
};

// complexity is constant
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create a new node obj
  var newNode = {};
  // assigning this.value to node
  newNode.val = node;
  // assigning this.connection to an empty array
  newNode.connection = [];
  // assign new node to graph 
  this[node] = newNode; 
};

// complexity is linear
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.hasOwnProperty(String(node))) {
    return true;  
  }
  return false;
};

// complexity is linear
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // depending on type of container used we may need to locate the node
  // once located delete node from the graph
  var key = node;
  var obj = this;
  _.each(this[key].connection, function(neighborNode) {
    obj.removeEdge(neighborNode, node);
  });
  delete this[key];
};

// complexity is linear
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (_.contains(this[fromNode].connection, toNode)) {
    return true;
  }
  return false;
};

// complexity is constant
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // Add fromNode to the connection list of toNode
  this[fromNode].connection.push(toNode);
  // Add toNode to the connection list of fromNode
  this[toNode].connection.push(fromNode);
};

// complexity is linear
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // Remove fromNode from the connection list of toNode
  var indexOfNode = this[fromNode].connection.indexOf(toNode);
  if (indexOfNode !== -1) {
    this[fromNode].connection.splice(indexOfNode, 1);
  }
  indexOfNode = this[toNode].connection.indexOf(fromNode);
  if (indexOfNode !== -1) {
    this[toNode].connection.splice(indexOfNode, 1);
  }  
  // Remove toNode from the connection list of fromNode
};

// complexity depends on complexity of cb function
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // Iterate through all the nodes contained in Graph
  // Invoke the callback function once per item w/ item as the argument
  var obj = this;
  _.each(obj, function(val, key) {
    cb(key);
  });
};

// Finds number of nodes in graph
Graph.prototype.findNumberOfNodes = function() {
  var count = 0;

  // iterate over keys in graph
  for (var key in this) {
    // check only keys with val property (since, it iterates over prototype.methods)
    if (this[key].val) {
      count++;
    }
  }
  return count;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


