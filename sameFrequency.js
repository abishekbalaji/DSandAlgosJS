// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have same frequency of digits.

const sameFrequency = (num1, num2) => {
  if (num1 === undefined || num2 === undefined) {
    return false;
  }
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) {
    return false;
  }
  let counter = {};
  for (let char of num1) {
    counter[char] = ++counter[char] || 1;
  }

  for (let char of num2) {
    if (!counter[char]) {
      return false;
    }
    counter[char] -= 1;
  }
  return true;
};

console.log(sameFrequency(182, 281));
