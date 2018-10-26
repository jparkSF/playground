class Node {
  constructor(data) {
    this.data = data;
    this.left;
    this.right;
  }
}

class BST {
  // Recursive function to insert an key into BST
  insert(root, key) {
    // if the root is null, create a new node an return it
    if (root == null) {
      return new Node(key);
    }

    // if given key is less than the root node, recurse for left subtree
    if (key < root.data) {
      root.left = this.insert(root.left, key);
    }
    // if given key is more than the root node, recurse for right subtree
    else {
      root.right = this.insert(root.right, key);
    }

    return root;
  }

}
