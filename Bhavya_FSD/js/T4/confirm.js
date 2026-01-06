function b(){
    var res=confirm("Do you want to continue?");
    if(res==true){
        alert("YEs");
        return true;
    }
    else{
        document.write("No");
        return false;
    }
}