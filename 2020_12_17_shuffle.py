'''
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
'''

# https://swfanon.fandom.com/wiki/JawaScript

def shuffle(nums):
    # do the thing

    # create holder function
    temp = []
    z = 0

    # cycle through nums
    for x in nums:
        # if 0 pop 0 to temp
        if x == 0:
            z += 1
            nums.remove(x)

    # put temp nums at end of nums
    blaaarg = [0] * z

    print(temp)

    print(blaaarg)

    nums = nums + blaaarg

    print(nums)

    return nums

shuffle([0,1,0,3,12])





# make an array with x things in it:
'''
my_array = [thing] * x
my_array = [0] * 100
'''
# interate through indexes AND values of array:
'''
for (index, x) in enumerate(my_array):
'''
# check membership of array:
'''
if x in my_array:
if x not in my_array:
'''
# get the first element of an array:
'''
my_array[0]
'''
# get the last element of an array:
'''
my_array[-1]
'''

# hello!