const { odd, even } = require("./var");
const checkNumber = require("./func"); //변수 이름은 뭐든 바꿀수 있다

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  } else {
    return even;
  }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));
