const { odd, even } = require("./var");
//import { odd, even } from './var';

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
