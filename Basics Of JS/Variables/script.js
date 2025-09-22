console.log(a);
var a = 7; // output: undefined
console.log(a); // output: 7

/* console.log(b); */ // output: ReferenceError: Cannot access 'b' before initialization
let b = 69; 
console.log(b); // output: 69

console.log(c);// output : ReferenceError: Cannot access 'c' before initialization
const c = 9; 
console.log(c); // output: 9

// Explanation:
// In JavaScript, variable declarations using 'var' are hoisted to the top of their scope and initialized with 'undefined'.
// Therefore, accessing 'a' before its declaration does not throw an error, but returns 'undefined'.

// However, variables declared with 'let' and 'const' are also hoisted, but they are not initialized.
// They remain in a "temporal dead zone" from the start of the block until the declaration is encountered.
// Accessing them before their declaration results in a ReferenceError.

// Summary:
// - 'var' declarations are hoisted and initialized with 'undefined'.
// - 'let' and 'const' declarations are hoisted but not initialized, leading to a ReferenceError if accessed before declaration.