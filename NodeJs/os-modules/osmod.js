const os = require("os");

console.log(os.hostname());
// it will hostname of pc
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.arch());
// it is os module and it that which version in pc we are using

// const freeMemory = os.freemem();
// it will tell u the free space in ur pc
// console.log(freeMemory); // it gave u value in bits.
// console.log(`${freeMemory / 1024 / 1024 / 1024}`);

// const totalMemory = os.totalmem();
// console.log(`${totalMemory / 1024 / 1024 / 1024}`);
