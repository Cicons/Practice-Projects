/*
'abba' => true
'abcba' => true
'' => true
'ab' => false

    revStr = string[::-1]
*/

const isPallindrome = (string) => {
    // break the string into an array
    var brokeStr = string.split("");

    // reverse the order of characters in the array
    var revBroke = brokeStr.reverse();

    // rejoin the array into a reversed string
    var revStr = revBroke.join("");
    
    if (string === revStr)
    {
        return true;
    }
    else if (string !== revStr)
    {
        return false;
    }



    return true;
};

const result1 = isPallindrome('aXbcbba');
console.log(result1);

const result2 = isPallindrome('abababa');
console.log(result2);


/*

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
