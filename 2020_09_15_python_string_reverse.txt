'''
Write a function that reverses a string. The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
You may assume all the characters consist of printable ascii characters.

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
'''

# hello
# 01234
# 0123

# find lehgth of sting
# find half of string length
# 

def reverse(string):
    max = len(string)
    
    front = 0 # lower
    back = max - 1# higher
    
    rev = ''
    
    for i in range(back, front - 1, -1):
        rev += string[i]
        
        
    # range(front, back).reverse()
    # range(stop, start, -1)
    # range(0, 3) -> [0, 1, 2]
    
    # for i in range(start, stop):
        # print(i)
    
    return rev

print("Reverse:", reverse("hello"))