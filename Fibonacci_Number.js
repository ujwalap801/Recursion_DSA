
// // TO FIND NTH POSITION IN SERIES USING RECURSIVE
var fib = function (n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
};

console.log(fib(9))

// TO FIND NTH POSITION IN SERIES USING ITERATIVE 
function fibonacci(n) {
    if (n < 0) return undefined;  // Invalid input
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

// TO Get the 5th Fibonacci number
console.log(fibonacci(5));


// TO PRINT N FIBANOCCI SERIES
function printFacb(n) {
    let fib = [];
    if (n < 0) return fib;
    if (n >= 1) fib.push(0);
    if (n >= 2) fib.push(1);

    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib;
}


console.log(printFacb(5));