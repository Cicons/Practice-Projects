# examples of objects
point = {"x": 1, "y": 2}
point["x"] = 10
test = point["x"]
print(test)

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
