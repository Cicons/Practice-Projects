/*

Given a string s, find the length of the longest substring without repeating characters.

"abcabcbb" -> "abc" (3)
"bbbbb" -> "b" (1)

abc|abd -> 3
ab|cabd -> 4

abacbdad

startText ""

currentStr

arrStr

*/

// abcadef
// [adef] (incorrect)
// [bcadef] (correct)

// longestArrayStrings(["a", "ab", "abc"])
// longestArrayStrings([["a"], ["a","b"], ["a","b","c"]])

function longestArrayStrings(array) {
    // create "maxLength" int
    maxLength = 0;
    // create "longArray"
    longArray = [];

    // begin seaching through array,
    array.forEach((tempString) => {
        // if length of current string is greater than "maxLength",
        if (tempString.length > maxLength)
        {
            maxLength = tempString.length;

            // clear "longArray", add current string to "longArray"
            longArray = [];
            longArray.push(tempString);
        }
        // if length of current string is equal to "maxLength",
        else if (tempString.length == maxLength)
        {
            // add current string to "longArray"
            longArray.push(tempString);
        }
    });

    return longArray;
}

function longestSubstring(startText) {
    // begin with "startText"
    startArray = startText.split("");

    // create a "currentString" Queue
    currentString = [];
    // create a "stringArray" array
    stringArray = [];
    // create a "currentCharacter" char

    // feed charaters from "startText" to "currentString"
    startArray.forEach((currentCharacter) => {
        // if "currentString" contains "currentCharacter"
        if (currentString.indexOf(currentCharacter) >= 0)
        {
            strIndex = currentString.indexOf(currentCharacter);

            // save "currentString" to "stringArray"
            stringArray.push(currentString.join(""));

            // pop front of "currentString" off

            /*
                this part needs work,
                crop off the front after a repeat is found
                arr = [H,e,l,l,o, ,w,o,r,l,d,!];
                       0 1 2 3 4
                res = str.slice(1, 4);
            */
            
            currentString = currentString.slice(strIndex + 1);

            //currentString = currentString.substring(strIndex + 1);

            // currentString.removeAt(currentString.indexOf(currentCharacter));

            // add current character to "currentString"
            currentString.push(currentCharacter);
        }
        // else,
        else
        {
            // add current character to "currentString"
            currentString.push(currentCharacter);
        }
        // add last "currentString" if not yet added
    });

    if (stringArray[stringArray.length - 1] != currentString.join(""))
    {
        stringArray.push(currentString.join(""));
    }

    // when finished, check length of each string in "stringArray"

    console.log("String array is: ", stringArray)
    return longestArrayStrings(stringArray);
}

theArray = "abrakadabra"

console.log(longestSubstring(theArray));

/*
----- indexOf
haystack.indexOf(needle)
if the needle is in the haystack, returns the index (0+)
if the needle is not in the haystack, returns -1

----- get the last element of array
myArray[myArray.length - 1];

----- remove last element of array
myArray.pop()

----- remove first element of array
myArray.shift()

----- using forEach
myArray.forEach((param) => {
    // do things to each param
});

----- printing stuff;
console.log(...);

----- split a string
myString.split(delimiter);

* if you don't provide a delimiter it splits on spaces
* if you provide an empty string as a delimiter it splits all characters

----- reverse an array
myArray.reverse();

----- join an array into a string
myArray.join(delimiter);
* If delimiter is an empty string, it concatenates all elements together

----- compare two things are equal
a === b

----- compare two things are not equal
a !== b

*/