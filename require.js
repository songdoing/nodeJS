require("./var");

//console.log(require);
//require.cache에 불러왔던 파일을 저장해놓고, 담부터는 cache에서 읽어와서 효율을 높인다.
console.log("require.cache");
console.log(require.cache);
console.log("require.main");
console.log(require.main);
console.log(require.main === module); //true
console.log(require.main.filename);
