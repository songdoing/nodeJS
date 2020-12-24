const crypto = require("crypto");

const algorithm = "aes-256-cbc";
// crypto.getCiphers()하면 사용가능한 알고리즘 목록
const key = "abcdefghijklmnopqrstuvwxyz123456"; //32bites
const iv = "1234567890123456"; //16bites

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update("I am happy", "utf8", "base64");
//cipher.update(문자열, 인코딩, 출력인코딩)
//문자열은 utf인코딩, 암호는 base64를 많이 사용함
result += cipher.final("base64");
//cipher.final(출력인코딩): 암호와 완료
console.log("encoding:", result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
//암호화할때 사용했던 알고리즘, 키, iv 그대로 넣어줌
let result2 = decipher.update(result, "base64", "utf8");
//cipher.update의 순서의 반대로
result2 += decipher.final("utf8");
console.log("decoding:", result2);
