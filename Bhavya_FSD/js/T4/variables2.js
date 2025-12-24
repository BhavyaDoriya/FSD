// There are two types of variables in js:
// 1. Primitive variables(Immutable) --> store simple data types like number, string, boolean, null, undefined, symbol, bigint
// 2. Reference/Non Primitive variables(Mutable)--> store complex data types like objects, arrays, functions

// 1. Primitive variables examples:
// number
var num=42;
// srting
var str="Hello, World!";
// boolean
var bool=true;//false
// null
var n=null;
// undefined
var u;

//2. Reference/Non Primitive variables examples:
// object
var obj={name:"Alice", age:30};         
// array
var arr=[1, 2, 3, 4, 5];

// Special case with variables:
x=5;
y="5";
console.log(x==y);//will return true because values are same even though types are different
console.log(x===y);//will return false because types are different even though values are same

console.log("Datatype of num is:",typeof(num));//will return number
console.log("Datatype of str is:",typeof(str));//will return string
console.log("Datatype of bool is:",typeof(bool));//will return boolean
console.log("Datatype of n is:",typeof(n));//will return object (this is a known quirk in JavaScript, null is considered an object)
console.log("Datatype of u is:",typeof(u));//will return undefined
console.log("Datatype of obj is:",typeof(obj));//will return object
console.log("Datatype of arr is:",typeof(arr));//will return object (arrays are a type of object in JavaScript)

var a=[{name:"xyz",age:23},{name:"abc",age:45,city:"ahm"}];//array of object
console.log(a[0]);
console.log(a[a.length-1]);
console.log(a[0]["name"]);
