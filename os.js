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

// Os info -------------------
// os.arch(): x64
// os.platform(): win32
// os.type(): Windows_NT
// os.uptime(): 631694
// os.hostname(): LAPTOP-M08K4NQB
// os.release(): 10.0.18363
// path info ------------------
// os.homedir(): C:\Users\msmk2
// os.tmpdir(): C:\Users\msmk2\AppData\Local\Temp
// cpu info --------------------
// os.cpus(): [
//   {
//     model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
//     speed: 1800,
//     times: {
//       user: 5488203,
//       nice: 0,
//       sys: 8341687,
//       idle: 112762718,
//       irq: 1124875
//     }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
//     speed: 1800,
//     times: {
//       user: 3796890,
//       nice: 0,
//       sys: 4011453,
//       idle: 118783796,
//       irq: 58140
//     }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
//     speed: 1800,
//     times: {
//       user: 9289843,
//       nice: 0,
//       sys: 7169281,
//       idle: 110132968,
//       irq: 101562
//     }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
//     speed: 1800,
//     times: {
//       user: 5005015,
//       nice: 0,
//       sys: 4282750,
//       idle: 117304375,
//       irq: 48984
//     }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
//     speed: 1800,
//     times: {
//       user: 8286203,
//       nice: 0,
//       sys: 6942828,
//       idle: 111363078,
//       irq: 94343
//     }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
//     speed: 1800,
//     times: {
//       user: 5099093,
//       nice: 0,
//       sys: 7045796,
//       idle: 114447234,
//       irq: 61781
//     }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
//     speed: 1800,
//     times: {
//       user: 6880015,
//       nice: 0,
//       sys: 6305687,
//       idle: 113406375,
//       irq: 73390
//     }
//   },
//   {
//     model: 'Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
//     speed: 1800,
//     times: {
//       user: 5510937,
//       nice: 0,
//       sys: 6824953,
//       idle: 114256234,
//       irq: 51421
//     }
//   }
// ]
// os.cpus().length: 8
// memory info-------------------
// os.freemem(): 2976161792
// os.totalmem(): 8463486976
