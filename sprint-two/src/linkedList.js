var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // running time O(1)
  list.addToTail = value => {
    let newTail = Node(value);
    // if (!head) then head is newNode else we need to connect to last tail
    !list.head ? list.head = newTail : list.tail.next = newTail;
    // newNode will always become tail
    list.tail = newTail;
  };

  // removes the first node from the list and returns its value [running time O(1)]
  list.removeHead = () => {
    if (list.head === null) {
      return null;
    }
    // create temp var that will be value of current head
    let head = list.head;
    // list.head will be head.next
    list.head = list.head.next;
    // return temp
    return head.value;
  };

  // returns boolean reflecting whether or not the passed-in value is in the linked list [running time O(n)]
  list.contains = target => {
    // var node is head of list
    let node = list.head;
    // do node evaluation vs passed-in value while node is not equal to null
    do {
      // if match return true else at the end of iteration return false
      if (node.value === target) {
        return true;
      }
      node = node.next;
    } while (node);
    return false;
  };

  list.addValueBeforeValue = (previousValue, newValue) => {
    let newNode = Node(newValue);
    for (var head = list.head; head.value !== previousValue; head = head.next) {}
    newNode.next = head.next;
    head.next = newNode;  
    return list;     
  };

  return list;
};

let Node = value => {
  let node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
