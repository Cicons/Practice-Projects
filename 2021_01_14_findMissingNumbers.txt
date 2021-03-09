'''
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Example:

Input:
[4,3,2,7,8,2,3,1] -> [5, 6]
[1, 1, 1] -> [2, 3]
[] -> []
'''

def findMissingNumbers(numbers):
    # create counting array (size n)
    n = len(numbers)
    count = list(range(1,n))

    # iterate through input array
    for x in numbers:
        if x in count:
            count.remove(x)
        # if number in input is in counting, pop number from counting
        # for (index2, y) in enumerate(count):
        #    if  x == y:
        #        count.remove(y)
    
    if numbers[-1] != n:
        count.append(n)

    print(count)


    return []

def findMissingNumbers2(numbers):
    count = []

    for i in range(len(numbers) - 1):
        if numbers[i + 1] - numbers[i] > 1:
            for n in range(numbers[i] + 1, numbers[i + 1]):
                count.append(n)
    
    if numbers[-1] < len(numbers):
        for n in range(numbers[-1] + 1, len(numbers) + 1):
            count.append(n)

    
    print(count)

    return[]



#             v     v
#          0,1,2,3,4,5,6
numbers = [1,1,3,3,4,7,7]
#          1,2,3,4,5,6,7

findMissingNumbers(numbers)

findMissingNumbers2(sorted(numbers))

# sort
'''
my_array.sort()

or

my_array = sorted(my_array)
'''
# remove element of array
'''
my_array = ['kiwi', 'lime', 'strawberry']
my_array.remove('lime')
'''
# remove index of array
'''
my_array = ['kiwi', 'lime', 'strawberry']
my_array.pop(1)
'''
# range
'''
for i in range(n):
for i in range(len(my_array)):
'''
# get length of array
'''
len(my_array)
'''
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