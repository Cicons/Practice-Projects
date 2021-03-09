# https://repl.it/@dustyartifact/InfamousUnevenIrc#main.py

'''
Implement a trie with insert, search, and startsWith methods.

Do or do not. There is no trie.

alphabet = ['a', 'b', 'c']
# a, b, c, aa, ab, ac, ba, bb, bc, ...
# root
#   -> a
#        -> a ("aa")
#        -> b ("ab")
#        -> c ("ac")
#   -> b
#        -> a
#        -> b
#        -> c
#   -> c

'''

# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert("art")
# param_2 = obj.search("art")

# vocabulary = ['a', 'r', 't']
# example: tar, rat, art

class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.phrase = ""
        

    def insert(self, word):
        """
        Inserts a word into the trie.
        """
        self.phrase = word
        

    def search(self, word):
        """
        Returns if the word is in the trie.
        """
        if (word == self.phrase):
          return True

phrase = "this is a string"

Test = Trie()

Test.insert("The cake is a lie")

cake = Test.search(phrase)

Test.insert("The answer is 42")

answer = Test.search(phrase)

Test.insert("this is a string")

phr = Test.search(phrase)


if (cake):
  print("The Cake matched")
else:
  print("The Cake didn't match")

if(answer):
  print("The Answer matched")
else:
  print("The Answer didn't match")

if (phr):
  print("The Phrase matched")
else:
  print("The Phrase didn't match")


'''
# examples of objects
point = {"x": 1, "y": 2}
point["x"] = 10
test = point["x"]
print(test)

# obj = {}

obj = {"test": {"toast": {"trust": 100}}}
result = obj["test"]["toast"]["trust"]
print(result)

# examples of classes
class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y
  
  def toString(self):
    return '(' + ', '.join([str(self.x), str(self.y)]) + ')'
  
  def toast(self):
    return self.toString()
  
point = Point(12, 24)
point.x = 100
print(point.toString())

# objects
point_a = {"x": 1, "y": 2}
point_b = {"x": 3, "y": 4}

# classes
point_a = Point(1, 2)
point_b = Point(3, 4)

def test():
  return 'derp'

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
'''
bulk comments
'''