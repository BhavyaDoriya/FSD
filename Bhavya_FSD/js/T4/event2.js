function kd(e){
    alert(`Key is ${e.key} and Code is ${e.keyCode}`);

}
function md(e)
{
    var b=e.button;
    if(b==0){
        alert("left");
    }
    else if(b==1){
        alert("middle");
    }
    else if(b==2){
        alert("right");
    }
    else{
        alert("unknown");
    }
}