/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

// My Submission V1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    var secondNum = target - nums[i];
    var result = [];
    if (
      nums.includes(secondNum) &&
      nums.indexOf(nums[i]) != nums.lastIndexOf(secondNum)
    ) {
      result.push(nums.indexOf(nums[i]));
      result.push(nums.lastIndexOf(secondNum));
      return result;
    }
  }
};
