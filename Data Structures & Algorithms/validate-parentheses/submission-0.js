class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const open = ['(','[','{']
        const close = [')',']','}']
        for (let i = 0; i <= s.length; i++) {
            if (open.indexOf(s[i]) !== -1) {
                stack.push(s[i]);
                continue;
            } else {
                if (stack.pop() !== open[close.indexOf(s[i])]) return false;
            }
        }
        return stack.length === 0;
    }
}
