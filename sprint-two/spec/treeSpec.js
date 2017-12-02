describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  // new test
  it ('should return number of children for a given value', function() {
    tree.addChild(5);
    tree.children[0].addChild(1);
    tree.children[0].addChild(2);
    expect(tree.findNumOfChildren(5)).to.equal(2);
  });

  it ('should add a parent value to each child node', function() {
    tree.addChild(5);
    tree.children[0].addChild(1);
    tree.children[0].addChild(2);
    expect(tree.children[0].parent.value).to.eql(undefined);  // root of parent has value of undefined
    expect(tree.children[0].children[1].parent.value).to.equal(5);
  });

  it ('disassociates the tree with its parent (in both directions)', function() {
    tree.addChild(5);
    tree.children[0].addChild(1);
    tree.children[0].addChild(2);
    tree.children[0].children[0].addChild(3);
    tree.children[0].children[0].addChild(4);
    tree.removeFromParent(1);
    expect(tree.contains(1)).to.equal(false);
    expect(tree.contains(3)).to.equal(false);
    expect(tree.contains(4)).to.equal(false);
    expect(tree.contains(5)).to.equal(true);
    expect(tree.contains(2)).to.equal(true);
  });

  it ('should add 1 to each value of node in tree', function() {
    tree.addChild(5);
    tree.children[0].addChild(1);
    tree.children[0].addChild(10);
    tree.children[0].children[0].addChild(20);
    tree.children[0].children[0].addChild(100);
    tree.traverse(function(value) {
      return ++value;
    });
    expect(tree.contains(6)).to.equal(true);
    expect(tree.contains(2)).to.equal(true);
    expect(tree.contains(11)).to.equal(true);
    expect(tree.contains(21)).to.equal(true);
    expect(tree.contains(10)).to.equal(false); 
    expect(tree.contains(100)).to.equal(false);
    expect(tree.contains(101)).to.equal(true); 
  });

  it ('should log values of tree in breadth first order', function() {
    tree.addChild(5);
    tree.children[0].addChild(1);
    tree.children[0].addChild(2);
    tree.children[0].children[0].addChild(3);
    tree.children[0].children[0].addChild(4);
    tree.breadthFirstLog();
  });

});
