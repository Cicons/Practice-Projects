/**
 * Code written for practice problem at:
 * https://leetcode.com/problems/valid-parentheses/
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s)
{
    const strLength = s.length;
    
    const stack = [];
    var result = true;
    
    for (var i = 0; i < strLength; i++)
    {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[")
        {
            stack.push(s[i]);
        }
        else if( (stack[stack.length-1] === "(" && s[i] === ")") ||
            (stack[stack.length-1] === "{" && s[i] === "}") ||
            (stack[stack.length-1] === "[" && s[i] === "]") )
        {
            stack.pop();
        }
        else { result = false }
    }
    
    if (stack.length) { result = false }
    
    return result;
};
