var a="hello";
var b=`Hello template literals`;
var a1="XYZ";
var x="hello"+a1+"|";
var y=`Hello ${a1} |`;
console.log(x);
console.log(y);
function add(a,b)
{
    document.writeln(`Multiplication of ${a} and ${b} is ${a*b}`);
}
add(4,5);
//templateLiteral doesn't throw error
var v1=`
    Hello
    World
`;
// var v2="hello
// world";-->throws error
console.log(v1);