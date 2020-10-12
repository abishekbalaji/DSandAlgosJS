const reverse1 = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

console.log(reverse1("jello"));

const reverse2 = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverse2("helklo"));