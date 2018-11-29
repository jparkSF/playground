var moveZeroes = function (nums) {
  let cur = 0, i = 0;
  nums.forEach(n => {
    if (n !== 0) {
      nums[cur] = nums[i];
      cur++
      console.log(nums, cur)
    }
    i++;
  });
  while (cur < nums.length) {
    nums[cur] = 0;
    cur++
  }
  return nums
};

console.log(moveZeroes([1, 0, 0, 2, 3, 4, 1]))