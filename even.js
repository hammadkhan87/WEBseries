document.getElementById("hed").addEventListener("mouseenter",aedd);
function aedd(){
    document.getElementById("hed").classList.add("xyz");
    var a = document.getElementById("hed").classList;
    console.log(a);
    document.querySelector(".xyz").style.backgroundColor = "red";
}
document.getElementById("hed").addEventListener("mouseout",ree);
function ree(){
    document.querySelector(".xyz").style.backgroundColor ="gray";
    document.getElementById("hed").classList.remove("xyz");
}