// Area of Triangle using Heron's formula

let a = 7;
let b = 5;
let c = 6;

let s = (a + b + c) / 2;

console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)));