function printprops(o) {
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
console.log(tensquared)

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

// Define and invoke a function to determine if we're instrict mode.
const strict = (function() { return !this; }());
console.log(strict)

//method invocation
o.m = f;
o.m();

let calculator = { // An object literal
operand1: 1,
operand2: 1,
add() { // We're using method shorthand syntax for this function
// Note the use of the this keyword to refer to the containing object.
this.result = this.operand1 + this.operand2;
}
};
calculator.add(); // A method invocation to compute 1+1.
calculator.result // => 2

o["m"](x,y); // Another way to write o.m(x,y).
a[0](z) // Also a method invocation (assuming a[0] isa function).

// Run three asynchronous operations in sequence, handling errors.
doStepOne().then(doStepTwo).then(doStepThree).catch(handleErrors);



let o = { // An object o.
    m: function() { // Method m of the object.
    let self = this; // Save the "this" value in avariable.
    this === o // => true: "this" is the object o.
    f(); // Now call the helper functionf().
    function f() { // A nested function f
    this === o // => false: "this" is global or undefined
    self === o // => true: self is the outer "this" value.
    }
    }
    };
    o.m(); // Invoke the method m on the object o


const f = () => {
    this === o // true, since arrow functions inherit this
    };   

const f = (function() {
    this === o // true, since we bound this function to the outer this
    }).bind(this);



// Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.
function getPropertyNames(o, a) {
if (a === undefined) a = []; // If undefined, use a new array
for(let property in o) a.push(property);
return a;
}

// getPropertyNames() can be invoked with one or two arguments:
let o = {x: 1}, p = {y: 2, z: 3}; // Two objects for testing
let a = getPropertyNames(o); // a == ["x"]; get o's properties in a new array
getPropertyNames(p, a); // a == ["x","y","z"]; add p's properties to it
console.log(o)

// Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.
function getPropertyNames(o, a = []) {
for(let property in o) a.push(property);
return a;
}


// This function returns an object representing a rectangle's 2 dimensions.
// If only width is supplied, make it twice as high as it is wide.
const rectangle = (width, height=width*2) => ({width,
height});
rectangle(1) // => { width: 1, height: 2 }




//return the largest one
function max(first=-Infinity, ...rest) {
    let maxValue = first; // Start by assuming the first arg is biggest
    // Then loop through the rest of the arguments, looking for bigger
    for(let n of rest) {
    if (n > maxValue) {
    maxValue = n;
    }
    }
    // Return the biggest
    return maxValue;
    }
    max(1, 10, 100, 2, 3, 1000, 4, 5, 6)

    //rewritten to use the Arguments object instead of a rest parameter


function max(x) {
    let maxValue = -Infinity;
    // Loop through the arguments, looking for, and remembering, the biggest.
    for(let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxValue) maxValue = arguments[i];
    }
    // Return the biggest
    return maxValue;
    }



let numbers = [5, 2, 10, -1, 9, 100, 1];
Math.min(...numbers) // => -1



// This function takes a function and returns a wrapped version
function timed(f) {
return function(...args) { // Collect args into a rest parameter array
console.log(`Entering function ${f.name}`);
let startTime = Date.now();
try {
// Pass all of our arguments to the wrapped function
return f(...args); // Spread the args back out again
}
finally {
// Before we return the wrapped return value, print elapsed time.
console.log(`Exiting ${f.name} after
${Date.now()-startTime}ms`);
}
};
}

 // Compute the sum of the numbers between 1 and n by brute force
function benchmark(n) {
let sum = 0;
for(let i = 1; i <= n; i++) sum += i;
return sum;
}
// Now invoke the timed version of that test function
timed(benchmark)(1000000) // => 500000500000; this is the sum of the numbers
