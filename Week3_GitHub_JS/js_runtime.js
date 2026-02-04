console.log("Start");

setTimeout(() => {
  console.log("Non-blocking timeout callback");
}, 2000);

console.log("End");

/*
Output:
Start
End
Non-blocking timeout callback
*/
