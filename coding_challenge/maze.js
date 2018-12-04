Please use this Google doc to code during your interview.To free your hands for coding, we recommend that you use a headset or a phone with speaker option.

/*
	function Node(val){
this.val = val
this.next = this.top = this.bottom = this.left = this.right = null

}
*/


let main = (n) => {
  // n == 5, we need to make 25 nodes
  let nodeTable = []

  for (let i = 0; i < n * n; i++) {
    let node = new Node(0);
    nodeTable.push(node)
  }

  let head = nodeTable[0]
  let tail = nodeTable[1]

  // will create 5 x 5 grid, nested array
  let grid = [...Array(n)].map(e => Array(n));


  //head node with completed path will be return
  return makePath(head, tail, grid, nodeTable);




}

let makePath = (head, tail, grid, nodeTable) => {
  let visted = { head: true, tail: true }
  // when visited.length is nodeTable.length,
  // stop the iteration, and return head

  while (visited.length != nodeTable.length) {


  }
  return head
}

