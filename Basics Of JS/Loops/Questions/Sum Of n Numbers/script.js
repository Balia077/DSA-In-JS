var num = Number(prompt("Enter a number"));

if(isNaN(num)){
    console.log("This is not a number");
}
else{
    var sum = 0;
    for(var i = 1; i <= num; i++){
        sum += i;
    }
    console.log(sum);
}
