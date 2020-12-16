//import { odd, even } from './var'; 가장 위에 와야함.
const { odd, even } = require("./var");

function checkOddOrEven(number) {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
}
//export default checkOddOrEven;
//import,export default와 require, module.exports랑 기능이 아주 똑같이는 않다
module.exports = checkOddOrEven;

// module.exports !== exports === {}
