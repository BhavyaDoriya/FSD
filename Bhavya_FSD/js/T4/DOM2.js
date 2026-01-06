function myfun(){
    document.getElementById('pid').removeAttribute("title");

    var d=document.getElementsByClassName("pc");
    d[1].innerHTML="Updated Paragraph";
        document.getElementById("pid1").style.color="blue";

        for (d1 of d){
            d1.style.color="red";
            d1.style.fontSize="35px";
            d1.style.textTransform="uppercase";

        }
    d[2].style.textDecoration="underline";
    document.querySelector("img").setAttribute("src","../../images/lebron.jpg");
    document.querySelector("#heading1").style.border="5px dotted blue";
    document.querySelector(".heading2").style.textAlign="center";
    var i=document.querySelectorAll("img");
    for (i1 of i){
        i1.setAttribute("height","1000");
        i1.setAttribute("width","1000");
    }    
}
