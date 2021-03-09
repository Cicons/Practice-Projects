'''
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
'''

def climbStairs(result, n):
  '''
  print("n is: ")
  print(n)
  print("result is: ")
  print(result)
  '''
  if (n < 1):
    return [result]
  elif (n == 1):
    if (not result):
      return [result + "1 step"]
    else:
      return [result + " + 1 step"]
  elif (n == 2):
    if (not result):
      return [result + "1 step + 1 step", result + "2 step"]
    else:
      return [result + " + 1 step + 1 step", result + " + 2 step"]
  else: # if n > 2
    if (not result):
      # handle taking 1 step
      res1 = result + "1 step"

      # handle taking 2 steps
      res2 = result + "2 step"

      return climbStairs(res1, n - 1) + climbStairs(res2, n - 2)
    else:
      # handle taking 1 step
      res1 = result + " + 1 step"

      # handle taking 2 steps
      res2 = result + " + 2 step"

      return climbStairs(res1, n - 1) + climbStairs(res2, n - 2)

  return result

result = ""

final = climbStairs(result, 5)
print ("number of routes: " + str(len(final)))
# print(final)

for (i, x) in enumerate(final):
  print(str(i + 1) + ". " + x)

# print('\n'.join([str(index + 1) + '. ' + path for (index, path) in enumerate(final)]))



# []
# [e]
# array.append(e)


# my_array.pop(2)
# for thing in things:

# PYTHONIC
# for (index, thing) in enumerate(things):

# JAVA
# for (i=0; i<things.length; i++) {
#     thing = things[i]
# }

# new_array = [e for e in old_array]

# for e in old_array:
#    new_array.append(e)

# my_array.append(thing)
# my_array.extend(list_of_things)

# my_string = ''

# len(my_list)
# new_string = "my_string" + str(my_number)

'''
bulk comments
'''