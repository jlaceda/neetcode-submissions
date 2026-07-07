class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const targetMap = new Map();
        for (let i = 0; i <= nums.length; i++) {
            if (targetMap.has(nums[i])) return [i, targetMap.get(nums[i])];
            targetMap.set(target - nums[i], i);
        }
    }
}
