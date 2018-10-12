let findMissingNumber = array => {
  const maxNum = Math.max(...array)
  const totalSum = maxNum*(maxNum + 1) / 2

  let actualSum = 0

  array.forEach(num => {
    actualSum += num
  })

  console.log(totalSum - actualSum)
}

const array = [1,2,3,4,5,7,8,9,10]
findMissingNumber(array);
// Only works on finding one missing number