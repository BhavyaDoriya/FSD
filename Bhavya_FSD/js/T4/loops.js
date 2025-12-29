// for loop example
for(let i=0;i<=5;i++){
    console.log("Iteration number:",i);
}
// while loop example
let j=3;
while(j<=6){
    j++;
    console.log("Value of j is:",j);
}
// do while loop example
let k=8;
do{
    console.log("Value of k is:",k);
}while(k<7);
// for of loop example
var l=["banana","apple","mango"];
for(let i of l){
    console.log("Fruit:",i);
}
// for in loop example
var person={name:"John", age:25, city:"New York"};
for(let key in person){
    console.log(key+":",person[key]);
}
for(let key in l){
    console.log(key);
    // will return indexes-->To access element use l[key]
}
// block scope with let
let x=10;
if(true){
    let x=999;
}
console.log(x);
// function scope with var
var y=20;
if(true){
    var y=888;
}   
console.log(y);

