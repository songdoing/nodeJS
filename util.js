const util = require("util");
const crypto = require("crypto");

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, "Do not use this function.");

dontUseMe(1, 2);

//바꿀 함수를 인자로 제공. async/await패턴까지 사용가능, 단 콜백 (error, data)=> {}형식유지
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString("base64"));
  })
  .catch((eroor) => {
    console.log(error);
  });
