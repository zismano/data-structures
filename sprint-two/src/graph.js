

// Instantiate a new graph
var Graph = function() {
  // Do we create a container?
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // Do we create an obj?
  // assigning this.value to node
  // assigning this.connection to an empty array
  // How do we assign the obj to the Graph (this)?  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // iterate through the graph's container
  // if a node's value contains the passed-in value stop iterating and return true
  // otherwise continue iterating
  // when the end is reached with no successful match return false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // depending on type of container used we may need to locate the node
  // once located delete node from the graph
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // Iterate through the connections array of fromNode node
  // Check if the current connection matches toNode
  // If so return true
  // Otherwise continue iterating
  // when the end is reached with no successful match return false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // Add fromNode to the connection list of toNode
  // Add toNode to the connection list of fromNode
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // Remove fromNode from the connection list of toNode
  // Remove toNode from the connection list of fromNode
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // Iterate through all the nodes contained in Graph
  // Invoke the callback function once per item w/ item as the argument
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


