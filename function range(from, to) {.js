const sum = (x, y) => { return x + y; };

const f = x => { return { value: x }; }; // Good: f()returns an object
const g = x => ({ value: x }); // Good: g()returns an object
const h = x => { value: x }; // Bad: h() returnsnothing
const i = x => { v: x, w: x }; // Bad: SyntaxError

function hypotenuse(a, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
    }

    