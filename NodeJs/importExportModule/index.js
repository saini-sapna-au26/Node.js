// this is the case when single function call
// const add = require("./oper");
// console.log(add(5, 5));

// console.log(add);
// we are adding add insted of name beczz it already require

// this is the case when multiples function or modules create
// const oper = require("./oper");
// console.log(oper);
// console.log(oper.add(5, 5));
// console.log(oper.sub(10, 5));

// multiples adding sub
const { add, sub, name } = require("./oper");

console.log(add(5, 5));
console.log(sub(10, 5));
console.log(name);
