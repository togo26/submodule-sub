const { multiplyNumber } = require('./minus');

exports.addNumber = (a, b) => {
  console.log('this is sub_branch');
  return a + b;
};
exports.multiplyNumber = multiplyNumber;
