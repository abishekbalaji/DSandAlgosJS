// Example for frequency counter pattern

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let counter1 = {},
    counter2 = {};

  for (let char of str1) {
    counter1[char] = ++counter1[char] || 1;
  }

  for (let char of str2) {
    counter2[char] = ++counter2[char] || 1;
  }

  for (let key in counter1) {
    if (counter2[key] !== counter1[key]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram("anagram", "nagaram"));

// OR - Using only 1 object - Improved time as well as space complexity

const validAnagram2 = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let counter = {};

  for (let char of str1) {
    counter[char] = ++counter[char] || 1;
  }

  for (let char of str2) {
    if (!counter[char]) {
      return false;
    } else {
      counter[char] -= 1;
    }
  }
  return true;
};

console.log(validAnagram2("anagram", "nagaram"));

// validAnagram2 is faster
