const sum = (x, y) => { return x + y; };

const f = x => { return { value: x }; };
 // Good: f()returns an object
const g = x => ({ value: x }); // Good: g()returns an object
const h = x => { value: x }; // Bad: h() returnsnothing
const i = x => { v: x, w: x }; // Bad: SyntaxError

function hypotenuse(a, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
    }


    
for(var i=0;i<10;i++){
    console.log("Hello World",i);
}


printprops({x: 1});
let total = distance(0,0,2,1) + distance(2,1,3,5);
let probability = factorial(5)/factorial(13);