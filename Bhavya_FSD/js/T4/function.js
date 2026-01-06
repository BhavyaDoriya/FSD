// Function without params

function abc(){
        document.write("Hello")
}
abc();
function xyz(a,b)
{
    console.log(a+b);
}
xyz(99,69);
// anonymous function
(function(){
    console.log("Example");
})
();
// function with params and return statement
function out(a,b){
    return a+b;
    console.log("sum");//will not execute
}
console.log(out(5,10));

function printdata(firstname,lastname){
    document.write("<h1>"+firstname+" "+lastname+"</h1>");
}

function printAdd(a,b){
    document.writeln(add(a,b));
}
function add(a,b){
    return a+b;
}
var g=function(a,b){
    return a*b;
}
console.log(g(5,6));

// Default Params
// Every parameter has default value undefined
//if you do int+undefined it will return NaN
function cam(a,b=2){
    return a+b;
}
console.log(cam(4));
console.log(cam(4,5));