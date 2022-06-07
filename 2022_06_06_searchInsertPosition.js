/**
 * Code written for practice problem at: 
 * https://leetcode.com/problems/search-insert-position/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //let output = 0;
    //let valid = true;
    const numsLen = nums.length;
    
    
    for (let i = 0; i < numsLen; i++) {
        if (nums[i] === target) { return i }
        else if (nums[i] > target) { return i }
    }
    
    
    /*
    while(valid) {
        if (nums[output] > target) {
            return output;
        }
        else if (nums[output] === target) {
            return output;
        }
        
        output ++;
        
        if (output >= nums.length) {
            valid = false;
        }
    }
    */
    
    //return output;
    return numsLen;
};
