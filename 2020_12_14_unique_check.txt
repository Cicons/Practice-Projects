'''
Place for cursors: <>

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Input: nums = [2,2,1]
Output: 1

Input: nums = [4,1,2,1,2]
Output: 4

Input: nums = [1]
Output: 1
'''

def singleNumber(nums):
    # do the thing

    # create saved array
    saved = []

    # create multiple array
    mult = []

    # iterate through input array
    for x in nums:
            # compare to multiple:
            if x not in mult:
                # if not in mult, check saved:
                if x in saved:
                    # if in saved: add to mult, remove from saved
                    mult.append(x)
                    saved.remove(x)
                else:
                    # if not in saved: add to saved
                    saved.append(x)
            # else: if in mult, do nothing
    
    # print saved
    print(saved)

singleNumber([5,9,3,2,1,1,3,5,12,3])


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