/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 **/


const kthSmallest = function (root, k) {
  let left = nodeCount(root.left);
  if (left + 1 === k) {
    return root.val;
  } else if (left + 1 < k) {
    return kthSmallest(root.right, k - left - 1);
  } else {
    return kthSmallest(root.left, k);
  }
};

const nodeCount = (root) => {
  if (root === null) {
    return 0;
  }
  return 1 + nodeCount(root.left) + nodeCount(root.right);
}