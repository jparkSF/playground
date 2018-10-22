

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

