// There are four ways to declare a variable in JavaScript:
// 1. Using var -->Preferred for global scope
// 2. Using let -->Preferred for local scope(since ES-6)
// 3. Using const -->Preferred for local scope(since ES-6) and for values that should not be reassigned
// 4. Without any keyword (not recommended)-->This will allow variable to work out of scope
var a=10;//global
function my(){
    var b=20;//local
    console.log(a,b); // Accessible
}
console.log(a); // Accessible
// console.log(b); // Not Accessible, will throw error -->Uncaught ReferenceError: b is not defined
my();
function my2(){
    c=69;//Declared without any keyword -->works as global variable
    console.log(c); // Accessible
}
my2();
console.log(c); // Accessible, but not recommended practice
console.log(d);// Undefined, but not error
var d=100;
var d=200; // Re-declaration allowed with var
console.log(d);
let e=300;
// let e=400; // Re-declaration not allowed with let -->Uncaught SyntaxError: Identifier 'e' has already been declared
e=400; // Re-assignment allowed with let
console.log(e);
const f=500;
// const f=600; // Re-declaration not allowed with const -->Uncaught SyntaxError: Identifier 'f' has already been declared
//f=600; // Re-assignment not allowed with const -->Uncaught TypeError: Assignment to constant variable.
console.log(f);
//local and global scopes are same for var, let and const when declared outside any function


// Difference between var and let in terms of block scope:

function abc(){
    let x=5;
    if(x>2){
        let y=10; // y is block-scoped to this if block
        console.log(y);
    }
    // console.log(y); -->referance error, y is not accessible here
}
abc();
function abc1(){
    var v=5;
    if(v>2){
        var w=10000; // y is block-scoped to this if block
        console.log(w);
    }
    console.log(w);// -->no referance error, w is accessible here
}
abc1();

// Some special cases for const
const q=2000000;
function f1(){
    const q=300000; // No error, this q is local to f1
    console.log(q);
}

f1();
console.log(q);

// if you try to rewrite values of const variable on same scope, 
// it will throw error. If the scope is different, it will work fine.
console.log(z);// error for let and const but not for var
const z=400;

