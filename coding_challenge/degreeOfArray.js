
function degreeOfArray(arr) {
  // Write your code here
  /*
  1) make counting hash and find max value
  2) iterate thru arr, and find keys that hash[key] == value.
  3) Iterate through the keys, for each key use indexOf and lastIndexOf
  to find start and end
  4) min = Math.min(min, end-start + 1)
  5) return min
  */

  let counter = {}
  let max_occur
  let validKeys = {}
  let min = arr.length

  arr.forEach(el => {
    if (!counter[el]) {
      counter[el] = 1
    } else {
      counter[el] += 1
    }
  })

  max_occur = Math.max(...Object.values(counter))


  arr.forEach(el => {
    if (counter[el] == max_occur) {
      validKeys[el] = true
    }
  })

  Object.keys(validKeys).forEach(key => {
    let firstIdx = arr.indexOf(parseInt(key))
    let lastIdx = arr.lastIndexOf(parseInt(key))

    // console.log(firstIdx, lastIdx)
    min = Math.min(min, lastIdx - firstIdx + 1)
  })


  return min
}