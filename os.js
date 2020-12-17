const os = require("os");
// 운영체제의 정보를 담는 내장모듈이고, 그냥 require하면 됨

console.log("Os info -------------------");
console.log("os.arch():", os.arch());
console.log("os.platform():", os.platform());
console.log("os.type():", os.type());
console.log("os.uptime():", os.uptime());
console.log("os.hostname():", os.hostname());
console.log("os.release():", os.release());

console.log("path info ------------------");
console.log("os.homedir():", os.homedir());
console.log("os.tmpdir():", os.tmpdir());

console.log("cpu info --------------------");
console.log("os.cpus():", os.cpus());
console.log("os.cpus().length:", os.cpus().length);

console.log("memory info-------------------");
console.log("os.freemem():", os.freemem());
console.log("os.totalmem():", os.totalmem());
