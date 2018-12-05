/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    let j = i + 1

    for (let j = i + 1; j < nums.length; j++) {
      let temp = nums[i] + nums[j]
      if (temp == target) {
        return [i, j]
      }
    }
  }
};

twoSum([2,7,11,4],9)


// How can I make this more time efficient?


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let store = {}

  for (let i = 0; i < nums.length; i++) {
    let remain = target - nums[i]

    if (store[remain] != undefined) {

      return [store[remain], i]

    } else {
      store[nums[i]] = i
    }

  }

  return res
};