let a = 7;
let  b = 18;

// Method 1 : Using third variable

//let temp = a;    // 7
//a = b;          // 18
//b = temp;       // 7

//console.log(a);  //output : 18
//console.log(b);  //output : 7

//Metthod 2 : using arithmetic operators

//a = a + b;   // 25
//b = a - b;   // 7
//a = a - b;   // 18

//console.log(a);  //output : 18
//console.log(b);  //output : 7

//Method 3 : using destructuring

[a, b] = [b, a];

console.log(a);  //output : 18
console.log(b);  //output : 7