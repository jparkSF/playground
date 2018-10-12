let findPairToTheSum = (array, n) => {
  if (array.length < 2) {
    return;
  }

  hash = {}
  pairs = []
  array.forEach(el => {
    let target = n - el 
    hash[el] = true
    if (hash[target]){
      pairs.push([el, target])
    } 
  })
  console.log(pairs)
  return pairs
}

array = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9]
number = 7

findPairToTheSum(array, number);