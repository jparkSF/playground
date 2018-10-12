let findSmallAndLargeNum = array => {
  let sorted = array.sort(function (a, b) { return a - b })
  
  console.log(sorted)
  console.log( [sorted[0], sorted[sorted.length-1]])
}

let array = [-20, 34, 21, -87, 92, 12123123122]
findSmallAndLargeNum(array);