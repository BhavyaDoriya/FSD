function p(){
    var r=prompt("Enter your Name:","ABC");
    alert(`Welcome ${r}`);
}
function sum1(){
    let num1=prompt("Enter number 1:");

    let num2=prompt("Enter number 2:");
    if (num1===null||num1===""||num1===undefined||num2===null||num2===""||num2===undefined||typeof(num1)!=Number||typeof(num2)!=Number){
        alert("Not a Number");
    }
    else{
        alert(`Sum is:${parseInt(num1)+parseInt(num2)}`);

    }

}
