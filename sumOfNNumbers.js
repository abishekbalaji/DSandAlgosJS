const sumOfnNumbers = (n) => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};

const sumOfnNumbers2 = (n) => (n * (n + 1)) / 2;

console.log(sumOfnNumbers(3));
console.log(sumOfnNumbers2(3));

// sumOfnNumbers --> O(n)
// sumOfNumbers2 --> O(1)
