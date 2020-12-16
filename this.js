console.log(this); // {} = module.exports
console.log(this === module.exports);
console.log(this === exports);

function a() {
  console.log(this === global, this === exports);
}
a();
