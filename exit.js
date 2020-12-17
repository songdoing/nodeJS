let i = 1;
setInterval(() => {
  if (i === 5) {
    console.log("End");
    process.exit();
  }
  console.log(i);
  i++;
}, 1000);
// 1
// 2
// 3
// 4
// End
