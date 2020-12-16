const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};

console.time("whole time");
console.log("normal console");
console.log(string, number, boolean);
console.error("error message");

console.table([
  { name: "Jenny", birth: 1980 },
  { name: "Mason", birth: 2010 },
]);

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time("How long");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("How long");

function b() {
  console.trace("error location tracing");
}

function a() {
  b();
}
a();

console.timeEnd("whole time");
