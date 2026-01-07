function saveData(){
    let name=document.getElementById("i1").value;
    localStorage.setItem("username",name);

}
function showData(){
    un=localStorage.getItem("username");
    document.getElementById("p1").innerHTML=un;
}
function clearData(){
    localStorage.removeItem("username")
}