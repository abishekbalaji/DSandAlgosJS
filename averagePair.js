// Write a function called averagePair. Given a sorted array of integers and a target average, determine
// if there is a pair of values in the array where the average of the
// pair equals the target average. There may be more than one pair
// that matches the average target.

const averagePair = (arr, avg) => {
  if (avg > arr[arr.length - 1] || arr.length <= 1) {
    return false;
  }
  let i = 0,
    j = arr.length - 1;
  while (i !== j) {
    if ((arr[i] + arr[j]) / 2 === avg) {
      return true;
    } else if ((arr[i] + arr[j]) / 2 > avg) {
      j--;
    } else {
      i++;
    }
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5));
