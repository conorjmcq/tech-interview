/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let indexMap = [];
    for (let i = 0; i < nums.length; i++) {
        if (indexMap.includes(nums[i])) {
            return true;
        } else {
            indexMap.push(nums[i]);         
        }
    }
    return false;
};