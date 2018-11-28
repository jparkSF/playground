var maxDepth = function (root) {
  if (!root) return 0
  let queue = [[root, 1]]
  let maxLevel = 1
  while (queue.length != 0) {
    let currentEl = queue.shift()

    let currentNode = currentEl[0]
    let currentLevel = currentEl[1]
    if (currentLevel > maxLevel) {
      maxLevel = currentLevel
    }

    if (currentNode != null && currentNode.left) {
      queue.push([currentNode.left, currentLevel + 1])
    }

    if (currentNode != null && currentNode.right) {
      queue.push([currentNode.right, currentLevel + 1])
    }
  }
  return maxLevel
};