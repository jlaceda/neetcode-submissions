class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const bracketMap = {
            ")": "(",
            "]": "[",
            "}": "{",
        };
        for (const char of s) {
            // If it's a closing bracket
            if (char in bracketMap) {
                // Pop the top element if stack isn't empty, otherwise use a dummy value
                const topElement = stack.length > 0 ? stack.pop() : "#";

                // If it doesn't match the correct opening bracket, it's invalid
                if (topElement !== bracketMap[char]) return false;
                
            } else {
                // It's an opening bracket, push it onto the stack
                stack.push(char);
            }
        }
        return stack.length === 0;
    }
}
