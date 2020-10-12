const isAlphanumeric = (char) => {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
};

const charCount = (str) => {
  let obj = {};
  for (let char of str) {
    if (isAlphanumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
};

console.log(charCount("hello World !!!!"));

// OR ---------------------------------------

const charCount2 = (str) => {
  let obj = {};
  for (let char of str) {
    if (/[A-Za-z0-9]/.test(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
};

console.log(charCount2("hello World !!!!"));

// charCount is faster than charCount2.
