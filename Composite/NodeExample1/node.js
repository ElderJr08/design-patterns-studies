class Node {

  constructor(name) {
    this.children = [];
    this.name = name;
  }

  add(child) {
    this.children.push(child);
  }

  remove(child) {
    const length = this.children.length;
    for (let i = 0; i < length; i++) {
      if(this.children[i] === child) {
        this.children.splice(i, 1);
        return;
      }      
    }
  }

  getChild(i) {
    return this.children[i];
  }

  hasChildren() {
    return this.children.length > 0;
  }

}

module.exports = Node;