arr = [1,2,3,4]
function getMax(arr) {
  return Math.max.apply(null, arr);
}

function getMax(arr) {
  return Math.max(...arr)
}

