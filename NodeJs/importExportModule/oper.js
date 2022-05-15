// this is our module
const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const name = "sapna saini";

// modules exports
// module.exports = add;
// module.exports = name;

// module.exports.add = add;
// module.exports.sub = sub;

module.exports = { add, sub, name };
