// syntax
// keyword functionname=J(p1,p2,p3...,pn)=>expression
const f=a=>a*a;
console.log(f(3));
const print=()=>"hello";
console.log(print());
const mul=(a,b)=>`Multiplication is ${a*b}`;
console.log(mul(10,20));
const div=(j,k)=>{
    var d=j/k;
    return d;
}
console.log(`Division is ${div(6,2)}`);