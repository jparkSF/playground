let numbers = [1,2,3]

let getNum = (total, num) => {
  return total + num
}


console.log(numbers.reduce((total, num) => { return (total + num)}))
console.log(numbers.reduce(getNum))