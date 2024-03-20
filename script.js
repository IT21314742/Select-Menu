var selectorField = document.getElementById("selectorField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon")

selectorField.onclick = function(){
    list.classList.toggle("hide");
    arrowIcon
}