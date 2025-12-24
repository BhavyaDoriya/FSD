let a=1
if (a>5){
    console.log("greater");
}
else{
    console.log("smaller");
}

var role="viewer";
if(role=="admin"){
    console.log("Full Access");
}
else if(role=="editor"){
    console.log("Modify Access");
}
else if(role=="viewer"){
    console.log("Read Only Access");
}
else{
    console.log("No Access");
}

// same code using switch case
switch(role){
    case "admin":
        console.log("Full Access"); 
        break;
    case "editor":
        console.log("Modify Access");
        break;
    case "viewer":
        console.log("Read Only Access");        
        break;
    default:
        console.log("No Access");
        break;
}   
// ternary operator
let age=20;
let canVote=(age>=18) ? "Can Vote" : "Cannot Vote";
console.log(canVote);