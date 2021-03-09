def permute(numbers):
  #i = 0
  
  if (len(numbers) == 1):
    return [numbers]
  elif (len(numbers) == 2):
    return [
      [numbers[0], numbers[1]],
      [numbers[1], numbers[0]]
    ]
  else:
    #set up the first "base"
    
    final = []

    for (i, n) in enumerate(numbers):
      other = [x for x in numbers]
      #print(i)
      other.pop(i)
      permutations = permute(other)
      print(permutations)

      for element in permutations:
       final.append([numbers[i]] + element)

    print("final is ")
    print(final)
    
    return final

result = permute([0, 1, 2, 3])
print("result is ")
print(result)


# my_array.pop(2)
# for thing in things:
# for (index, thing) in enumerate(things):

# new_array = [e for e in old_array]

# for e in old_array:
#    new_array.append(e)

# my_array.append(thing)
# my_array.extend(list_of_things)



''''
input: [0, 1]
output:
[
  [0, 1],
  [1, 0]
]
'''

'''
input: [0, 1, 2]
output:
[
  [0, 1, 2],
  [0, 2, 1],
  [1, 0, 2],
  [1, 2, 0],
  [2, 0, 1],
  [2, 1, 0]
]
'''