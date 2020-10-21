// Write a function called maxSubarraySum which accepts an array of integers
// and a number called n. The function should calculate the maximum
// sum of n consecutive elements in the array.

const maxSubarraySum = (arr, num) => {
  let max = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  for (let i = 1; i < arr.length - num; i++) {
    let temp = 0;
    for (let j = i; j < num + i; j++) {
      temp += arr[j];
    }
    max = Math.max(max, temp);
  }
  return max;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));

// Sliding window approach

const maxSubarraySum2 = (arr, num) => {
  if (arr.length < num) {
    return null;
  }
  let maxSum = 0,
    tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum += arr[i] - arr[i - num];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4));
