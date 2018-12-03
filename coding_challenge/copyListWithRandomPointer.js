/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function (head) {
  let nodesTable = new Map(),
    // let table = {};
    preNewHead = new RandomListNode();
  prevNewNode = preNewHead;
  next = head;

  let getOrCreateNode = (node) => {
    if (nodesTable.has(node)) {
      return nodesTable.get(node);
    }
    // if (table[node]) {
    //     return table[node];
    // }

    let newNode = new RandomListNode(node.label);
    nodesTable.set(node, newNode);
    // table[node] = newNode
    return newNode;
  }

  while (next) {
    let node = getOrCreateNode(next);

    if (next.random) {
      node.random = getOrCreateNode(next.random);
    }

    prevNewNode.next = node;
    prevNewNode = node;
    next = next.next;
  }

  return preNewHead.next;


};