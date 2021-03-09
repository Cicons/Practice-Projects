'''

Given a tweet, return an array of all the noun-chunks (contiguous blocks of nouns) in the tweet

There are only four types of words (N, V, A, O)
You have a magic partOfSpeech() function which is always instant and correct

"I love pecan pie and ice cream" -> ["I", "pecan pie", "ice cream"]
"" -> []


Given a tweet, return an array of all opinions (noun-chunks preceded by an adjective) in the tweet
"I love fresh pecan pie and cold ice cream" -> ["fresh pecan pie", "cold ice cream"]
'''

def partOfSpeech(word):
    if (word in ["I", "pecan", "pie", "ice", "cream"]):
        return "N"
    elif (word in ["love"]):
        return "V"
    elif (word in ["hot", "fresh", "cold"]):
        return "A"
    else:
        return "O"

def getNounChunks(tweet):
    # create an array with tweet's data
    meat = tweet.split()

    print("meat = ", meat)

    # create "result"
    result = []

    # create "chunk"
    chunk = ""

    # move through tweet
    for x in meat:
        print("result = ", result)
        print("chunk = ", chunk)
        # if noun,
        if partOfSpeech(x) == "N":
            # add to "chunk"
            if chunk == "":
                chunk += x
            else:
                chunk += (" " + x)
        # if not noun
        else:
            # if "chunk" not empty
            if chunk:
                # add "chunk" to "result", clear "chunk"
                result.append(chunk)
                chunk = ""
    if chunk:
        result.append(chunk)

    return [result]

def getNounsDescribed(tweet):
    # create an array with tweet's data
    meat = tweet.split()

    print("meat = ", meat)

    # create "result"
    result = []

    # create "chunk"
    chunk = ""

    chunkStart = False

    # move through tweet
    for x in meat:
        print("result = ", result)
        print("chunk = ", chunk)
        # if "chunk" is empty
        if not chunk:
            # if A,
            if partOfSpeech(x) == "A":
                # add to chunk, set "chunkStart" to True
                chunk += x
                chunkStart = True
        # if "chunk" is not empty
        if chunk:
            # if x is N
            if partOfSpeech(x) == "N":
                # add x to chunk, set "chunkStart" to False
                chunk += (" " + x)
                chunkStart = False
            # if x is not N and "chunkStart" is False
            if partOfSpeech(x) != "N" and not chunkStart:
                # add "chunk" to "result", clear "chunk"
                result.append(chunk)
                chunk = ""
            # else if chunkStart is True
            elif chunkStart:
                # clear "chunk"
                chunk = ""

                # if A,
                if partOfSpeech(x) == "A":
                    # add to chunk, set "chunkStart" to True
                    chunk += x
                    chunkStart = True

    # if "chunk" is not empty
    if " " in chunk:
        result.append(chunk)

    return [result]


tweet = "I love cold pecan pie and fresh hot ice cream"
print(getNounChunks(tweet))
print(getNounsDescribed(tweet))


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