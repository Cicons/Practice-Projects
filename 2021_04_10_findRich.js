/*

    You are an ArenaNet admin
    You are trying to find the richest account on the server (defined as total GOLD of all their characters)

    Each row is an account. Each element of that row is a character's GOLD

    Input:
    [
        [12, 15, 200],
        [360],
        [1, 0, 1000, 10]
    ]

*/
function findRich(wealthArrays)
{
    // create totaled array
    totalAccounts = [];

    // iterate through main array
    wealthArrays.forEach((account) => {
        goldTotal = 0;

        // iterate through sub arrays
        account.forEach((characterGold) => {
            // total gold in sub arrays, save to new array
            goldTotal += characterGold;
        });

        totalAccounts.push(goldTotal);
    });


    // find richest player amount
    playerGold = Math.max(...totalAccounts);

    // find richest player index
    playerIndex = totalAccounts.indexOf(playerGold);
    /*
    playerIndex = totalAccounts.findIndex((gold) => {gold === playerGold});
    playerIndex = totalAccounts.indexOf(playerGold);
    */

    // display!
    console.log("The richest player is number", playerIndex, "with", playerGold, "Gold");
}

list = [[12, 15, 200],[360],[1, 0, 1000, 10]];

findRich(list);

/*
---- reduce
total = numbers.reduce((total, number) => {
    return total + number
});

---- slice
myArray.slice(start, end)
// extracts the part of the array from the start index to end-1

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
