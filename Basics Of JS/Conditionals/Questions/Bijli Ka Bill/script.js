let unit = Number(prompt("Enter the unit consumed: "));
let bill = 0;

if(isNaN(unit) || unit < 0){
    console.log("Invalid Input");
}
if(unit > 400){
    bill = (unit - 400) * 13;
    unit = 400;
}
if(unit > 200 && unit <= 400){
    bill += (unit - 200) * 8;
    unit = 200;
}
if(unit > 100 && unit <= 200){
    bill += (unit - 100) * 6;
    unit = 100;
}
if(unit > 0 && unit <= 100){
    bill += unit * 4;
}

console.log(`The total bill is: ${bill} Rs.`);
