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
  if (!head) {
    return null;
  }

  let original = head;
  let clone = new RandomListNode(original.label);
  let result = clone;

  original.copy = clone;

  while (original.next) {
    const nextCopy = new RandomListNode(original.next.label);

    clone.next = nextCopy;
    original.next.copy = nextCopy;

    original = original.next;
    clone = clone.next;
  }

  original = head;
  clone = result;

  while (original) {
    clone.random = original.random ? original.random.copy : null;

    original = original.next;
    clone = clone.next;
  }


  return result;
};