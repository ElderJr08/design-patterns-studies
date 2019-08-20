const Node = require('./node');

const tree = new Node("root");
const left = new Node("left");
const right = new Node("right");
const leftleft = new Node("leftleft");
const leftright = new Node("leftright");
const rightleft = new Node("rightleft");
const rightright = new Node("rightright");

function traverse(indent, node) {
  console.log(Array(indent++).join("--") + node.name);

  for (var i = 0, len = node.children.length; i < len; i++) {
    traverse(indent, node.getChild(i));
  }
}

tree.add(left);
tree.add(right);
tree.remove(right);
tree.add(right);

left.add(leftleft);
left.add(leftright);

right.add(rightleft);
right.add(rightright);

traverse(1, tree);



