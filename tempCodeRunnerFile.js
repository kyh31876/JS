function range(from, to) {
methods (behavior)
let r = Object.create(range.methods);
this object.
r.from = from;
r.to = to;
return r;
}
range.methods = {
includes(x) { return this.from <= x && x <= this.to; },
*[Symbol.iterator]() {
for(let x = Math.ceil(this.from); x <= this.to; x++)
yield x;
},
toString() { return "(" + this.from + "..." + this.to +
")"; }
};
let r = range(1,3); // Create a range object
r.includes(2) // => true: 2 is in the range
r.toString() // => "(1...3)"
[...r] // => [1, 2, 3]; convert to an array