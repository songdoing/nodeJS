const dep1 = require("./dep1");
const dep2 = require("./dep2");

dep1();
dep2();
// require dep1 {}
// require dep2 [Function (anonymous)]
// dep2 [Function (anonymous)]
// dep1 {}
//dep1이 dep2를 require하고 dep2가 dep1를 require함
//무한반복되지 않도록 node가 빈객체로 바꿈
//순환참조하는 상황이 나오지 않도록 하는게 좋음
