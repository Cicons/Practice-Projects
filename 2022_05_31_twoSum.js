/**
 * Code written for practice problem at: https://leetcode.com/problems/two-sum/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target)
{
    for(var i = 0; i < nums.length; i++)
    {
        for(var n = 0; n < nums.length; n++)
        {
            if (i != n)
            {
                if (nums[i] + nums[n] === target)
                {
                    return [i,n];
                }
            }
        }
    }
   
    return [];
};
