const crypto = require("crypto");

console.log(
  "base64:",
  crypto.createHash("sha512").update("jenny").digest("base64")
);
console.log("hex:", crypto.createHash("sha512").update("jenny").digest("hex"));
console.log(
  "base64:",
  crypto.createHash("sha512").update("london").digest("base64")
);
