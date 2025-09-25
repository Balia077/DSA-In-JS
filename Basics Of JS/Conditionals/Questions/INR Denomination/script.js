//INR Denomination

let amount = Number(prompt("Enter the amount: "));

if(amount >= 500){
    console.log(Math.floor(amount/500) + " notes of 500");
    amount = amount % 500;
}
if(amount >= 200){
    console.log(Math.floor(amount/200) + " notes of 200");
    amount = amount % 200;
}
if(amount >= 100){
    console.log(Math.floor(amount/100) + " notes of 100");
    amount = amount % 100;
}
if(amount >= 50){
    console.log(Math.floor(amount/50) + " notes of 50");
    amount = amount % 50;
}
if(amount >= 20){
    console.log(Math.floor(amount/20) + " notes of 20");
    amount = amount % 20;
}
if(amount >= 10){
    console.log(Math.floor(amount/10) + " notes of 10");
    amount = amount % 10;
}
if(amount >= 5){
    console.log(Math.floor(amount/5) + " notes of 5");
    amount = amount % 5;
}
if(amount >= 2){
    console.log(Math.floor(amount/2) + " notes of 2");
    amount = amount % 2;
}
if(amount === 1){
    console.log(Math.floor(amount/1) + " notes of 1");
    amount = amount % 1;
}