var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
    // if (!head) then head is newNode
    if (!list.head) {
      list.head = newTail;
    } else {
      // else we need to connect to last tail
      list.tail.next = newTail;
    }
    // newNode will always become tail
    list.tail = newTail;
  };

  list.removeHead = function() {
  // removes the first node from the list and returns its value
  // create temp var that will be value of current head
  // list.head will be head.next
  // return temp
  };

  list.contains = function(target) {
    // returns boolean reflecting whether or not the passed-in value is in the linked list
    // var node is head of list
    // do node evaluation vs passed-in value while node is not equal to null
    // if match return true else at the end of iteration return false
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
