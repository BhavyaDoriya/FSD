let names=["A","B","C"];
// push
var a=names.push("D"); //length of array after push
console.log(names);
console.log(a);
// pop
var b=names.pop(); //removed element
console.log(names);
console.log(b);
// map
let num=[1,2,3,4,5];
let mul=num.map(n=>n*2);
console.log(mul);
// filter-->will return all matching element
let even=num.filter(n=>n%2==0);
console.log(even);
// includes-->will return true if element is present else false
let hasThree=num.includes(3);
console.log(hasThree);
// find-->will return first matching element
let user=[{name:"A",age:20},{name:"B",age:25},{name:"C",age:25}];
let userAge25=user.find(u=>u.age===25);
console.log(userAge25);
document.write(JSON.stringify(userAge25));

// forEach
let n=["a","b","c"]
n.forEach(element => {
    console.log(element);
});