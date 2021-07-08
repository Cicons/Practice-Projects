'''

'abba' => true
'abcba' => true
'' => true
'ab' => false

'''

def isPalindrome(string):
    # leng = len(string)
    revStr = string[::-1]
    isPal = string == revStr
    return isPal

string = 'hello'
if isPalindrome(string):
    print(string + " is a palindrome")
else:
    print(string + " is not a palindrome")

string = 'abba'
if isPalindrome(string):
    print(string + " is a palindrome")
else:
    print(string + " is not a palindrome")

# [start:stop:step]

# join an array on a delimiter
'''
my_array = ["a", "c", "c"]
my_array.join(" <-> ")
"a <-> b <-> c"
'''
# split a string by a delimiter
'''
my_string.split(delimiter)
my_string.split(",")
my_string.split() -- defaults to splitting all whitespaces
my_array = my_string.split()
'''

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