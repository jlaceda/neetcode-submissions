class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        const countMap = new Map();
        for (let c in s) countMap.set(s[c], countMap.has(s[c]) ? countMap.get(s[c]) + 1 : 1)
        console.log(countMap);
        for (let c in s) if (countMap.get(s[c]) === 1) return c;
        return -1;
    }
}
