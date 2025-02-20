const add = function() {
  let sum = 0;
console.log(arguments)
  for(let i in arguments) {
    sum += arguments[i]
  }
  return sum
	
};

// console.log(add(0,1,2))

const subtract = function(a,b) {
  return a-b
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0)
};
// console.log(sum([0,1,2]))

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1)
};
console.log(multiply([1,2,5]))

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(num) {
	if (num === 0) return 1

  let fact = 1;
  for (let i=1; i<=num; i++) {
    fact *= i
  }
  return fact
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
