``function printprops(o) {
    for (let p in o) {
        console.log(`${p}: ${o[p]}\n`);
    }
}
// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}
// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}

// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
const square = function (x) { return x * x; };
// Function expressions can include names, which is useful for recursion.
const f = function fact(x) {
    if (x <= 1) return 1; else
        return x * fact(x - 1);
};
// Function expressions can also be used as arguments to other functions:
[3, 2, 1].sort(function (a, b) { return a - b; });
// Function expressions are sometimes defined and immediately invoked:
let tensquared = (function (x) { return x * x; }(10));


const sum = (x, y) => { return x + y; };
sum;


const f = x => { return { value: x }; };
f()


const sum = (x, y) => { return x + y; };
console.log(sum)

const polynomial = x => x*x + 2*x + 3;


let filtered = [1,null,2,3].filter(x => x !== null); // filtered == [1,2,3]

let squares = [1,2,3,4].map(x => x*x); //squares == [1,4,9,16]
squares

const x=10;
const y=20;

console.log(x+y);``