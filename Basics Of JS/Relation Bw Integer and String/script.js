let a = 7;
let b = "7";

console.log(a+b); // "77"
console.log(a-b); // 0 (b is converted to number)
console.log(a*b); // 49 (b is converted to number)
console.log(a/b); // 1 (b is converted to number)
console.log(a%b); // 0 (b is converted to number)

// Explicit Type Conversion
console.log(a+Number(b)); // 14 
console.log(a+parseInt(b)); // 14 
console.log(a+parseFloat(b)); // 14
console.log(a+String(b)); // "77"
console.log(a+Boolean(b)); // 8 
console.log(a+!!(b)); // 8 