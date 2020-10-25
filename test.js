const arr = [1, 2, 3];
arr.reverse();

console.log(arr);

console.log("hellOOO 123".toLowerCase());

result = {};

const char = "y";

console.log(result[char] > 0);
console.log(undefined > 0);

const num = Infinity;

console.log(num);

let str = "hello";
let str2 = "";

console.log(str.indexOf(str2.charAt(0)));

const maxSubarraySum = (arr, num) => {
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
