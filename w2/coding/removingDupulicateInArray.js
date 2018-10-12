let removeDuplicateNumbers = array => {
  hash = {}

  array.forEach(num => {
    hash[num] = num
  })

  console.log(Object.values(hash))
  
}

const array = [1,1,3,3,4,5,6,7,7,8,9,0,0]
removeDuplicateNumbers(array)