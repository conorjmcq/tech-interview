/** 
 * 
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order. 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {
        "(": ")",
        "{": "}",
        "[": "]",
    }

    const stack = [];
    
    for (const paran of s) {
        if (obj.hasOwnProperty(paran)) {
            stack.push(paran)
        } else {
            const closeParan = stack.pop();
            if (paran !== obj[closeParan]) {
                return false;
            }
        }
    }
    return stack.length === 0
};