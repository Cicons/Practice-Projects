/**
 * Code written for practice problem at: 
 * https://leetcode.com/problems/maximum-subarray/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    /********************
    Initialize:
        max_so_far = INT_MIN
        max_ending_here = 0

    Loop for each element of the array
        (a) max_ending_here = max_ending_here + a[i]
        (b) if(max_so_far < max_ending_here)
            max_so_far = max_ending_here
        (c) if(max_ending_here < 0)
            max_ending_here = 0
    return max_so_far
    ********************/
    
    let bestSum = nums[0];
    let count = 0;
    
    let min = 0;
    if (nums[0] < 0) { min = nums[0] }
    
    let numLen = nums.length;
    
    for (let i = 0; i < numLen; i++) {
        //console.log("1) nums[i]:", nums[i], " count:", count, " min:", min);
        if (nums[i] >= 0) { min = 0 }
        else if (nums[i] > min) { min = nums[i] }
        
        //console.log("2) nums[i]:", nums[i], " count:", count, " min:", min);
        if (count < min) { count = min }
        
        //console.log("3) nums[i]:", nums[i], " count:", count, " min:", min);
        count += nums[i];
        
        //console.log("4) nums[i]:", nums[i], " count:", count, " min:", min);
        if (min > count && bestSum < min) { bestSum = min }
        else if (count > bestSum) { bestSum = count }
        
        //console.log("5) bestSum:", bestSum)
    }
    
    return bestSum;
};
