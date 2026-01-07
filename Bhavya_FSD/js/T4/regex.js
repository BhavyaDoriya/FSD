// function test(){
//     var u=document.getElementById("i1").value;
//     var pattern=/^[^0-9]$/;//add "i" after "/" to make case insensitive
//     //if you use /abc/ it means string should contain abc consecutively
//     // if you use /[abc]/ it means any one of a or b or c should be present
//     // if you use /[^abc]/ it means atleast one character except a or b or c should be present(even space is okay)
//     //if you use /^a/ it means string should start with a(it can has any number of characters after a)
//     //if you use /a$/ it means string should end with a
//     //if you use /^ab$/ it means string should start with a and end with b with no characters in between
//     //if you use /^ab*c$/ it means string should start with a and end with c with any number of b in between(0 or more)
//     //if you use /^ab+c$/ it means string should start with a and end with c with at least one b in between(1 or more)
//     //if you use /^colou?r$/ it means string should contain word color or colour (? means u can occure only once or zero times) 
//     //if you use /a.b/ it means any one character can be present between a and b
//     //if you use /^[0-9]+$/ it means string should contain only digits one or more
//     // if you use /^[0-9]{10}$/ it means string should contain exactly 10 digits
//     //if you use /^[a-z]{3,5}$/ it means string should contain only lowercase letters with minimum 3 and maximum 5 letters
//     // if you use /^[a-z A-Z]{5,}$/ it means string should contain only lowercase and uppercase letters with minimum 5 letters
//     //if you use /^[^0-9]$/ it means string should contain only non-digit characters (only one character)
//     //if you use /(x|y)/ it means string should contain either x or y same as [xy]
//     //if you use /\d/ it means string should contain at least one digit same as [0-9]
//     //if you use /\D/ it means string should contain at least one non-digit same as [^0-9]
//     //if you use /\w/ it means string should contain at least one word character(small case, upper case letters,digits and _ ) same as [a-zA-Z0-9_](no spaces)
//     //if you use /\W/ it means string should contain at least one non-word character(special characters and spaces) same as [^a-zA-Z0-9_]
//     var upattern=/^[^_0-9@]+/
//     var passpattern=/^[^ ]{6,12}$/
//     //regex for email: 
//     // /^\w+([.-]?\w+)*@\w+([.]?\w+)*(\.\w{2,3})+$/
//     if(pattern.test(u)){
//         alert("Valid");
//     }
//     else{        
//         alert("Invalid");
//         }
// }

function test2(e){
    e.preventDefault()
    var u=document.getElementById("i1").value;
    var pass=document.getElementById("i2").value;
    var upattern=/^[^_0-9@]+/;
    var passpattern=/^[^ ]{6,12}$/;
    var moNum=/^[6-9]{1}[0-9]{9}$/;
    if(upattern.test(u)){
        if(passpattern.test(pass)){
            document.getElementById("p1").innerHTML="Success!";
            document.getElementById("p1").style.color="green";
            alert("Welcome to our website");
        }
        else{
            document.getElementById("p1").innerHTML="Invalid! Password must be 6-12 characters with no spaces";
            document.getElementById("p1").style.color="red";
        }
    }
    else{
        document.getElementById("p1").innerHTML="Invalid! Username must not startwith _ or digits or @ ";
        document.getElementById("p1").style.color="red";
    }
}