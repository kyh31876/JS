//Primary Expressions
//Primary expressions in JavaScript are constant or literal values,

//Literals are constant values that are embedded directly in your program.
1.23 // A number literal
"hello" // A string literal
/pattern/ // A regular expression literal

//The this keyword is used to different values in different places in the program

i // Evaluates to the value of the variable i.
sum // Evaluates to the value of the variable sum.
undefined // The value of the "undefined" property of the global object

//4.2 Object and Array Initializers

// /An object initializer is enclosed in curly braces ({}).
//These initializer expressions are sometimes called object literals and array literals.

[] // An empty array: no expressions inside brackets means no elements
[1+2,3+4] // A 2-element array. First element is 3, second is 7

let matrix = [[1,2,3], [4,5,6], [7,8,9]];//the value of an array initializer 
//expression may be different each time it is evaluated.

let sparseArray = [1,,,,5]; //A single trailing comma is allowed after the last expression in an array
//initializer and does not create an undefined element


let p = { x: 2.3, y: -1.2 }; // An object with 2 properties
let q = {}; // An empty object with no properties
q.x = 2.3; q.y = -1.2; // Now q has the same properties as p

//Object literals can be nested.
let rectangle = {
    upperLeft: { x: 2, y: 2 },
    lowerRight: { x: 4, y: 5 }
    };

//4.3 Function Definition Expressions

//a function definition expression is a “function literal” in the same way
// This function returns the square of the value passed to it.
let square = function(x) { return x * x; };

//4.4 Property Access Expressions

//JavaScript defines two syntaxes for property access:
expression . identifier
expression [ expression ]


let o = {x: 1, y: {z: 3}}; // An example object
let a = [o, 4, [5, 6]]; // An example array that contains
the object
o.x // => 1: property x of expression o
o.y.z // => 3: property z of expression o.y
o["x"] // => 1: property x of object o
a[1] // => 4: element at index 1 of expression a
a[2]["1"] // => 6: element at index 1 of expression a[2]
a[0].x // => 1: property x of expression a[0]


//If the value is null or undefined, the expression throws a TypeError

//4.4.1 Conditional Property Access
expression ?. identifier
expression ?.[ expression ]

a?.b //If a is null or undefined, then the expression evaluates to undefined without any attempt to access the
//property b

let a = { b: null };
a.b?.c.d // => undefined

let a = { b: {} }; //object has no property named c, then a.b?.c.d will again throw a TypeError
a.b?.c?.d // => undefined


a?.b.c//value of a is null or undefined, then the entire expression immediately evaluates to
//undefined, and subexpressions b and c are never even evaluated


let a; // Oops, we forgot to initialize this variable!
let index = 0;
try {
a[index++]; // Throws TypeError
} catch(e) {
index // => 1: increment occurs before TypeError is thrown
}
a?.[index++] // => undefined: because a is undefined
index // => 1: not incremented because ?.[] shortcircuits
a[index++] // !TypeError: can't index undefined.

//4.5 Invocation Expressions


//An invocation expression is JavaScript’s syntax for calling 
//(or executing) a function or method.

f(0) // f is the function expression; 0 is the argument expression.
Math.max(x,y,z) // Math.max is the function; x, y, and z are the arguments.
a.sort() // a.sort is the function; there are no arguments.

//If that expression is a property access expression, 
//then the invocation is known as a method invocation.

//4.5.1 Conditional Invocation

function square(x, log) { // The second argument is an optional function
    if (log) { // If the optional function is passed
    log(x); // Invoke it
    }
    return x * x; // Return the square of the argument
    }

//you can simply write the function invocation using ?.(),
function square(x, log) { // The second argument is an optional function
    log?.(x); // Call the function if there is one
    return x * x; // Return the square of the argument
    }
//Note, however, that ?.() only checks whether the lefthand side is null or undefined.


//if the value to the left of ?. is null or undefined,
//then none of the argument expressions within the parentheses are evaluated:
let f = null, x = 0;
try {
f(x++); // Throws TypeError because f is null
} catch(e) {
x // => 1: x gets incremented before the exception is thrown
}
f?.(x++) // => undefined: f is null, but no exception thrown
x // => 1: increment is skipped because of shortcircuiting


o.m() // Regular property access, regular invocation
o?.m() // Conditional property access, regular invocation
o.m?.() // Regular property access, conditional invocation


//4.6 Object Creation Expressions

//An object creation expression creates a new object and invokes a
//function (called a constructor) to initialize the properties of that object.

new Object()
new Point(2,3)

//If no arguments are passed to the constructor function in an object
//creation expression, the empty pair of parentheses can be omitted:

new Object
new Date

//4.7.3 Operator Side Effects

//side effects, and their evaluation may affect the result of future evaluations. 
//No other JavaScript operators have side effects, but function invocation
//and object creation expressions will have side effects if any of the
//operators used in the function or constructor body have side effects.


//4.7.4 Operator Precedence

// my is an object with a property named functions whose value is an
// array of functions. We invoke function number x, passing it argument
// y, and then we ask for the type of the value returned.
typeof my.functions[x](y)

//array index, and function invocation, all of which have higher priority
//than operators.

//4.7.5 Operator Associativity      

//Left-to-right associativity means that operations are
//performed from left to right

w = x - y - z;
//is the same as:
w = ((x - y) - z);

y = a ** b ** c;
x = ~-y;
w = x = y = z;
q = a?b:c?d:e?f:g;
//are equivalent to:
y = (a ** (b ** c));
x = ~(-y);
w = (x = (y = z));
q = a?b:(c?d:(e?f:g));


//4.8.1 The + Operator

//binary + operator adds numeric operands or concatenates string operands:
1 + 2 // => 3: addition
"1" + "2" // => "12": concatenation
"1" + 2 // => "12": concatenation after number-tostring
1 + {} // => "1[object Object]": concatenation after object-to-string
true + true // => 2: addition after boolean-to-number
2 + null // => 2: addition after null converts to 0
2 + undefined // => NaN: addition after undefined converts to NaN

1 + 2 + " blind mice" // => "3 blind mice"
1 + (2 + " blind mice") // => "12 blind mice"

//4.8.2 Unary Arithmetic Operators

//the unary operators all have high precedence and are all right-associative


//Unary plus (+)
    //The unary plus operator converts its operand to a number (or to NaN) 
    //and returns that converted value.