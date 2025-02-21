const fibonacci = function(n) {
    n = parseInt(n)
    let start = 0;
    let curr = 1;
    let sum = 0;

    if (n===1) return 1
    if (n<0) return 'OOPS'

    for (let i=0; i < n-1; i++) {
        sum = start + curr;
        start = curr;
        curr = sum;
    }
    return sum

    // Optimized solution
    // n = parseInt(n, 10); // Ensure n is an integer

    // if (isNaN(n) || n < 0) return 'OOPS'; // Handle invalid input and negative numbers
    // if (n === 0) return 0; // Handle fibonacci(0)
    // if (n === 1) return 1; // Base case

    // let start = 0n, curr = 1n; // Use BigInt for large numbers
    // for (let i = 0; i < n - 1; i++) {
    //     [start, curr] = [curr, start + curr]; // Clean swap
    // }
    // return curr; // Return BigInt result


    // Recursion: simple but slow bc it recalculatess values multiple times
    // function fibonacci(n) {
    //     if (n === 1 || n === 2) return 1;
    //     return fibonacci(n - 1) + fibonacci(n - 2);
    // }
};

console.log(fibonacci(1))
// Do not edit below this line
module.exports = fibonacci;
