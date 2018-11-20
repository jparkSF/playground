let makeAnagram = (arr1, arr2) => {
  let result = [];
  
  for(let i = 0; i < arr1.length; i++){
    result.push(compareAnagram(arr1[i], arr2[i]))
  }
  
  return result
}

let compareAnagram = (a,b) => {
  
  
  if (a.length !== b.length){
    return -1
  }

  counter = Array(26).fill(0)

  for(let i = 0; i < a.length; i++){
    let current_index = a.charCodeAt(i) - 'a'.charCodeAt(0)
    counter[current_index] += 1 
  }
  
  for (let j = 0; j < a.length; j++) {
    let current_index = b.charCodeAt(j) - 'a'.charCodeAt(0)
    counter[current_index] -= 1
  }
  
  let total = 0;
  console.log(counter)
  counter.forEach(count => {
    total += Math.abs(count)
  })
  
  return total/2
}


arr1 = ["a", "be", "cde"]
arr2 = ["bb", "bc", "efg"]
console.log(makeAnagram(arr1, arr2))




