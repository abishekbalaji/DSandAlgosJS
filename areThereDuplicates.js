// Frequency counter

const areThereDuplicates = (...args) => {
  let counter = {};
  for (let char of args) {
    if (counter[char]) {
      return true;
    }
    counter[char] = 1;
  }
  return false;
};

console.log(areThereDuplicates(2, 3, 4, 5, 2));

// Multiple pointers

const areThereDuplicates2 = (...args) => {
  let i = 0,
    j = 1;
  while (i !== args.length - 1) {
    if (j === args.length) {
      i++;
      j = i + 1;
    } else if (args[i] === args[j]) {
      return true;
    } else {
      j++;
    }
  }
  return false;
};

console.log(areThereDuplicates2(2, 3, 4, 5, 1, 2));

// Multiple pointers 2

const areThereDuplicates3 = (...args) => {
  args.sort();
  let start = 0,
    next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
};

console.log(areThereDuplicates3("z", "a", "c", "b", "y", "a"));

// One liner using Set

const areThereDuplicates4 = (...args) => {
  return new Set(args).size !== args.length;
};

console.log(areThereDuplicates4("z", "a", "c", "b", "y", "a"));
