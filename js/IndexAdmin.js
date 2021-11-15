
var x = document.getElementById("login");
var y = document.getElementById("forgot");
var z = document.getElementById("check-email");
function swap(){
    x.style.display = "none";
    y.style.display = "block";
}
function swapBack(){
    y.style.display = "none";
    x.style.display = "block";
}
function swapContinue(){
    y.style.display = "none";
    z.style.display = "block";
}
function swapBackCheck(){
    z.style.display = "none";
    x.style.display = "block";
}