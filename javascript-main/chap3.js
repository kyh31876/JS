//primitive types: number, strings ,Booleans 
let zero = 0; // Regular zero

let negz = -0; // Negative zero
zero === negz // => true: zero and negative zero are equal
1/zero === 1/negz // => false: Infinity and -Infinity are not equal

let x = .3 - .2; // thirty cents minus 20 cents
let y = .2 - .1; // twenty cents minus 10 cents
x === y // => false: the two values are not the same!
x === .1 // => false: .3-.2 is not equal to .1
y === .1 // => true: .2-.1 is equal to .1

// A string representing 2 lines written on one line:
'two\nlines'

let msg = "Hello, " + "world"; // Produces the string "Hello, world"
let greeting = "Welcome to my blog," + " " + name;


let s = "Hello, world"; // Start with some text.
// Obtaining portions of a string
s.substring(1,4) // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4) // => "ell": same thing
s.slice(-3) // => "rld": last 3 characters
s.split(", ") // => ["Hello", "world"]: split at delimiter string
// Searching a string
s.indexOf("l") // => 2: position of first letter l
s.indexOf("l", 3) // => 3: position of first "l" at or after 3
s.indexOf("zz") // => -1: s does not include the substring "zz"
s.lastIndexOf("l") // => 10: position of last letter l
// Boolean searching functions in ES6 and later
s.startsWith("Hell") // => true: the string starts with these
s.endsWith("!") // => false: s does not end with that
s.includes("or") // => true: s includes substring "or"
// Creating modified versions of a string
s.replace("llo", "ya") // => "Heya, world"
s.toLowerCase() // => "hello, world"
s.toUpperCase() // => "HELLO, WORLD"
s.normalize() // Unicode NFC normalization: ES6
s.normalize("NFD") // NFD normalization. Also "NFKC", "NFKD"
// Inspecting individual (16-bit) characters of a string
s.charAt(0) // => "H": the first character
s.charAt(s.length-1) // => "d": the last character
s.charCodeAt(0) // => 72: 16-bit number at the specified position
s.codePointAt(0) // => 72: ES6, works for codepoints > 16 bits
// String padding functions in ES2017
"x".padStart(3) // => " x": add spaces on the left to a length of 3
"x".padEnd(3) // => "x ": add spaces on the right to a length of 3
"x".padStart(3, "*") // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-") // => "x--": add dashes on the right to a length of 3
// Space trimming functions. trim() is ES5; others ES2019
" test ".trim() // => "test": remove spaces at start and end
" test ".trimStart() // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd() // => " test": remove spaces at right. Also trimRight
// Miscellaneous string methods
s.concat("!") // => "Hello, world!": just use + operator instead
"<>".repeat(5) // => "<><><><><>": concatenate n copies. ES6

// a string using square brackets instead of the charAt() method:
let s = "hello, world";
s[0] // => "h"
s[s.length-1] // => "d"

//template Literals 
let name = "Bill";
let greeting = `Hello ${ name }.`; // greeting == "Hello Bill."

//TAGGED TEMPLATE LITERALS

`\n`.length // => 1: the string has a single newline character
String.raw`\n`.length // => 2: a backslash character and the letter n


//pattern matching 

/^HTML/; // Match the letters H T M L at the start of a string
/[1-9][0-9]*/; // Match a nonzero digit, followed by any # of digits`
/\bjavascript\b/i; // Match "javascript" as a word, caseinsensitive

let text = "testing: 1, 2, 3"; // Sample text

let pattern = /\d+/g; // Matches all instances of one or more digits
pattern.test(text) // => true: a match exists
text.search(pattern) // => 9: position of first match
text.match(pattern) // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#") // => "testing: #, #, #"
text.split(/\D+/) // => ["","1","2","3"]: split on nondigits


//Boolean Values    

if (a === 4) {
    b = b + 1;
    } else {
    a = a + 1;
    }

undefined
null
0 -
0
NaN
""
//The following values convert to, and therefore work like, false:

if (o !== null) ...


if ((x === 0 && y === 0) || !(z === 0)) {
    // x and y are both zero or z is non-zero
    }
    


let strname = "string name"; // A string to use as a property name
let symname = Symbol("propname"); // A Symbol to use as a property name
typeof strname // => "string": strname is a string
typeof symname // => "symbol": symname is a symbol
let o = {}; // Create a new object
o[strname] = 1; // Define a property with a string name
o[symname] = 2; // Define a property with a\Symbol name
o[strname] // => 1: access the stringnamed property
o[symname] // => 2: access the symbolnamed property


//Immutable Primitive Values

let s = "hello"; // Start with some lowercase text
s.toUpperCase(); // Returns "HELLO", but doesn't alter s
s //undefined, null, booleans, numbers, and strings aren`t changed 


//Mutable Object References

let o = { x: 1 }; // Start with an object
o.x = 2; // Mutate it by changing the value of a property
o.y = 3; // Mutate it again by adding a new property
let a = [1,2,3]; // Arrays are also mutable
a[0] = 0; // Change the value of an array element
a[3] = 4; // Add a new array element


let o = {x: 1}, p = {x: 1}; // Two objects with the same properties
o === p // => false: distinct objects are never equal
let a = [], b = []; // Two distinct, empty arrays
a === b // => false: distinct arrays are never equal


let a = []; // The variable a refers to an empty array.
let b = a; // Now b refers to the same array.
b[0] = 1; // Mutate the array referred to by variable b.
a[0] // => 1: the change is also visible through variable a.
a === b // => true: a and b refer to the same object, so they are equal.



let a = ["a","b","c"]; // An array we want to copy
let b = []; // A distinct array we'll copy into
for(let i = 0; i < a.length; i++) { // For each index of a[]
    b[i] = a[i]; // Copy an element of a into b
}
let c = Array.from(b); // In ES6, copy arrays with Array.from()


function equalArrays(a, b) {
    if (a === b) return true; // Identical arrays are equal
    if (a.length !== b.length) return false; // Differentsize arrays not equal
    for(let i = 0; i < a.length; i++) { // Loop through all elements
    if (a[i] !== b[i]) return false; // If any differ, arrays not equal
    }
    return true; // Otherwise they are equal
    }