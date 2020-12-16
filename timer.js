const timeout = setTimeout(() => {
  console.log("exe after 1.5second");
}, 1500);

const interval = setInterval(() => {
  console.log("exe every 1 second");
}, 1000);

const timeout2 = setTimeout(() => {
  console.log("no exe");
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log("exe Now");
});

const immediate2 = setImmediate(() => {
  console.log("no exe");
});

clearImmediate(immediate2);
