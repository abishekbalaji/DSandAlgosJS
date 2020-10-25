// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a
// subsequence of the characters in the second string. In other words,
// the fuction should check whether the characters in the first string
// appear somewhere in the second string, without their order changing.

const isSubsequence = (str1, str2) => {
  if (!str1) return true;
  if (str2.length < str1.length) return false;
  let i = 1;
  let j = str2.indexOf(str1.charAt(0)) + 1;
  while (str2.length - 1 - j >= str1.length - 1 - i) {
    if (i === str1.length) {
      return true;
    } else if (str1[i] === str2[j]) {
      i++;
    }
    j++;
  }
  return false;
};

console.log(isSubsequence("hlello", "helello word"));

console.log(isSubsequence("", "sting"));

// Recursive

const isSubsequence2 = (str1, str2) => {
  if (!str1) return true;
  if (!str2) return false;
  if (str2[0] === str1[0]) {
    return isSubsequence2(str1.slice(1), str2.slice(1));
  }
  return isSubsequence2(str1, str2.slice(1));
};

console.log(isSubsequence2("hello", "hello word"));
console.log(isSubsequence2("helloh", "helo word"));
console.log(isSubsequence2("", "sting"));
console.log(isSubsequence2("sing", "sting"));
console.log(isSubsequence2("hlello", "helello word"));
