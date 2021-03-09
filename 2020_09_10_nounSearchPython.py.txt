'''
Write a function which takes a tweet and returns an array of nouns

Example:
"I love pecan pie and ice cream" -> ["I", "pecan", "pie", "ice", "cream"]
 N  V    N    N   O   N    N

You are given a magic "partOfSpeech" function which accepts a word as input, and returns a part of speech. For this problem, we will assume there are only four kinds of words: Noun, Verb, Adjective, or Other.

Examples:
partOfSpeech("fresh") -> "A"
partOfSpeech("pecan") -> "N"
partOfSpeech("love") -> "V"
partOfSpeech("and") -> "O"
'''

# for (i, word) in enumerate(phrase):
    # print(str(i) + ' ' + word)
 
# ['a b c'].split() -> ['a', 'b', 'c']

def partOfSpeech(word):
    if (word in ["I", "pecan", "cake", "pie", "ice", "cream"]):
        return "N"
    elif (word in ["love"]):
        return "V"
    elif (word in ["cold", "fresh"]):
        return "A"
    else:
        return "O"

def parse(tweet):
    # your stuff here
    return tweet.split()

tweet = "I love pecan pie and ice cream"
# print(parse(tweet))

phrase = parse(tweet)

newStuff = ""
nounStuff = ""
# nouns = []

for x in phrase:
    newStuff += partOfSpeech(x)
    if partOfSpeech(x) == 'N':
        nounStuff += x
        nounStuff += ' '
        # nouns.append(x)

nouns = parse(nounStuff)

print (newStuff)
print (nouns)

# def addNumbers(a,b):
#     sum = a + b
#     return sum
# num1 = int(input())
# num2 = int(input())
# print("The sum is", addNumbers(num1, num2))
