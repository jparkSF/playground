let findDups = array => {

  hash = {}

  array.forEach(el => {
    if (!hash[el]) {
      hash[el] = 1

    } else {
      hash[el] += 1
    }
  })

  // console.log(hash)
  dups = []
  for (var key in hash) {
    if (hash[key] > 1) {
      dups.push(parseInt(key))
    }
  }

  console.log(dups)
}



array = [1, 2, 2, 2, 3, 4, 5, 6, 6, 6, 7, 8, 9]

findDups(array);
