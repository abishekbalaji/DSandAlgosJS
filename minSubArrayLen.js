// Write a function called minSubArrayLen which accepts two parameters
// - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous
// subarray of which the sum is greater than or equal to the integer
// passed to the function. If there isn't one, return 0 instead.

const minSubArrayLength = (arr, sum) => {
  if (sum === 0) return 1;
  for (let char of arr) {
    if (char >= sum) return 1;
  }
  let windowSize = 2;
  let tempSum = 0,
    tempSum2 = 0;
  for (let i = 0; i < windowSize; i++) {
    tempSum += arr[i];
  }
  if (tempSum >= sum) return windowSize;
  tempSum2 = tempSum;
  let j = windowSize,
    i = windowSize - j;
  while (windowSize <= arr.length) {
    if (j === arr.length) {
      tempSum += arr[windowSize];
      windowSize++;
      j = windowSize;
      i = 0;
      tempSum2 = tempSum;
    } else if (tempSum2 + arr[j] - arr[i] >= sum) {
      return windowSize;
    } else {
      tempSum2 += arr[j] - arr[i];
      i++;
      j++;
    }
  }

  return 0;
};

console.log(minSubArrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLength([2, 3, 1, 2, 4, 3], 7));
