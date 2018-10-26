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

  // Function to determine if given Binary Tree is a BST or not by keeping a
  // valid range (starting from [MIN_VALUE, MAX_VALUE]) and keep shrinking
  // it down for each node as we go down recursively
  isBST(node, minKey, maxKey) {
    // base case
    if (node == null) {
      return true;
    }

    // if node's value fall outside valid range
    if (node.data < minKey || node.data > maxKey) {
      return false;
    }

    // recursively check left and right subtrees with updated range
    return this.isBST(node.left, minKey, node.data) &&
      this.isBST(node.right, node.data, maxKey);
  }

}
