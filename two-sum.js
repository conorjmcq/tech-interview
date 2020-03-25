/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Solution
 * To find the solution we need a more efficient way to check if the complement of the current entry exists. If
 * the complement exists then we need a way to lookup its index. We use a hash table to efficiently store and
 * look up a complement and its index. We're trading space for speed here. We reduce the look up time from 
 * O(n) to O(1). A hash table is built exactly for this purpose, it supports fast look up in near constant time.
 * I say "near" because if a collision occurred, a look up could degenerate to O(n)O(n) time. But look up in 
 * hash table should be amortized O(1)O(1) time as long as the hash function was chosen carefully.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indexMap = {};
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in indexMap) {
            return [indexMap[complement], i]
        }
        indexMap[nums[i]] = i;
    }
    return [];    
};