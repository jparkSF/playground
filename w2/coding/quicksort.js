let quicksort = array => {
  if (array.length <= 1) return array;

  let pivot = array[array.length-1]
  let left = []
  let right = []

  for (var i = 0; i < array.length-1; i ++){
    if (array[i] < pivot){
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)]

}

array = [6,2,4,5,1,4,6,9,7]

console.log(quicksort(array))
