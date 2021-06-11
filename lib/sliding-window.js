//  Given an array of positive numbers and a positive number ‘k,’
// find the maximum sum of any contiguous subarray of size ‘k’.

// time: O(n)
// space: O(1)

const maxSubarraySum = (k, arr) => {
    let windowStart = 0, currentSum = 0, largestSum = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        currentSum += arr[windowEnd];
        if (windowEnd >= k - 1) {
            largestSum = Math.max(largestSum, currentSum)
            currentSum -= arr[windowStart];
            windowStart++;
        }
    }

    return largestSum;
}

// Given an array of positive numbers and a positive number ‘S,’
// find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.
// Return 0 if no such subarray exists.

// time: O(n)
// space: O(1)

const smallestSubarrayOfSum = (s, arr) => {
    let windowStart = 0, windowSum = 0, smallestLength = Infinity;
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        while (windowSum >= s) {
            smallestLength = Math.min(smallestLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    return smallestLength === Infinity ? 0 : smallestLength;
}

console.log(smallestSubarrayOfSum(9, [3, 3, 2, 1, 1, 4, 9, 1, 2]));

module.exports = {
    maxSubarraySum,
    smallestSubarrayOfSum,
}