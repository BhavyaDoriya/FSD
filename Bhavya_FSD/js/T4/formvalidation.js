function myform(event){
    event.preventDefault();
    var obj=document.f1.i1.value;
    var obj1=document.forms["f1"]["i2"].value;
    var obj2=document.f1.i3.value;
    var l=document.forms["f1"].length;

    if(obj.length===0){
        alert("Name must be filled");
    }
    else if(obj1===""){
        alert("invalid email")
    }else{
        alert("Form submitted succcessfully"+`Welcome ${obj}. Email is ${obj1} `)
    }

}