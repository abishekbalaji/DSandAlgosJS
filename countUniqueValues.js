// Implement a function called countUniqueValues which accepts a sorted array and counts
// unique values in the array. There can be negative numbers in the array
// but it will always be sorted.

const countUniqueValues = (arr) => {
  let uniqueArray = [];
  for (let elem of arr) {
    if (!uniqueArray.includes(elem)) {
      uniqueArray.push(elem);
    }
  }
  return uniqueArray.length;
};

console.log(countUniqueValues([1, 2, 2, 3, 4, 4, 5]));

const countUniqueValues2 = (arr) => {
  let counter = {};
  for (let elem of arr) {
    counter[elem] = ++counter[elem] || 1;
  }
  return Object.keys(counter).length;
};

console.log(countUniqueValues2([1, 2, 2, 3, 4, 4, 5]));

const countUniqueValues3 = (arr) => {
  let i = 0;
  let stack = [arr[i]];

  while (i !== arr.length - 1) {
    if (stack[stack.length - 1] !== arr[i + 1]) {
      stack.push(arr[i + 1]);
    }
    i++;
  }
  return stack.length;
};

console.log(countUniqueValues3([1, 1, 2, 3, 3, 4, 4, 5]));

const countUniqueValues4 = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0,
    j = 1;
  while (j !== arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1;
};

console.log(countUniqueValues4([1, 1, 2, 3, 3, 4, 4, 5]));
