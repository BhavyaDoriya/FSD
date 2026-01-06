const abc=(p,q)=>console.log(p,q);
abc(1,2,3,4,5);
// rest
const xyz=(p,q,...r)=>console.log(p,q,r);
xyz(1,2,3,4,5);

var a1=[10,20,30];
var  a2=[40,50];
var a3=[a1,a2];//will sho something like this : [[10,20,30],[40,50]]
console.log(a3);
// but i want [10,20,30,40,50]
//use spread
var a4=[...a1,...a2];
console.log(a4);
// Exmple when to use spread
console.log(Math.min(a4));//will return NaN cause Math.min does not work on array it works on numbers
// In such cases convert the array into the numbers by spreading the array
console.log(Math.min(...a4));

// 