

var moveZeroes = function (nums) {

  let currentPos = 0, index = 0;

  nums.forEach(num => {
    console.log(nums)
    if (num !== 0) {
      nums[currentPos] = nums[index];
      currentPos++
    }

    index++
  })

  

  while (currentPos < nums.length) {
    nums[currentPos] = 0;
    currentPos++;
  }

  return nums;

};

console.log(moveZeroes([1, 0, 0, 2, 3, 4, 1]))