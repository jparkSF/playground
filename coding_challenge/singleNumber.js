// Given a non - empty array of integers, every element appears twice except for one.Find that single one.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {
    result = result ^ nums[i]
  }

  return result
};


let arr = [1,2,2,3,3,4,5,6,4,5,6,7,9,8,7,8,9]

console.log(singleNumber(arr)) // => 1