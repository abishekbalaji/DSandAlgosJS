// Example for frequency counter pattern

const same = (arr1, arr2) => {
  if (arr2.length !== arr1.length) return false;
  let arr1Obj = {},
    arr2Obj = {};
  for (let elem of arr1) {
    arr1Obj[Math.abs(elem)] = ++arr1Obj[Math.abs(elem)] || 1;
  }
  for (let elem of arr2) {
    arr2Obj[elem] = ++arr2Obj[elem] || 1;
  }
  for (let i in arr1Obj) {
    if (arr2Obj[i ** 2] !== arr1Obj[Math.abs(i)]) {
      return false;
    }
  }
  return true;
};

console.log(same([1, 2, 1, 3, 2, 1, 3, 3], [4, 9, 1, 4, 1, 1, 9, 9]));

// OR

const same2 = (arr1, arr2) => {
  if (arr2.length !== arr1.length) return false;
  for (let elem of arr1) {
    let index = arr2.indexOf(elem ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }
  return true;
};

console.log(same2([1, 2, 1, 3, 2, 1, 3, 3], [4, 9, 1, 4, 1, 1, 9, 9]));

//return true || false
// all elements in arr1 should have the corresponding alements squared in arr2
// frequency should be same - length of arr2 >= length of array1
// can have repeated elements in arr1. Which means arr2 should have repeated squares - same frequency.
// order of elements need not be same. Squares can be mixed up in arr2.


// same is a lot faster
