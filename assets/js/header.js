// Search (height:145px)

var searchblock=document.querySelector(".jssearch")
var searchplace=document.querySelector("#jssearchplace")
var closesearchicon=document.querySelector("#closesearchicon")
var alla
function opensearchplace(){
searchplace.style.height ="145px";
searchplace.style.display="block"
closesearchicon.style.display="block"
searchplace.style.transition = "all 0.2s ease-in-out"}
searchblock.addEventListener("click",opensearchplace)
function closesearchplace(){
searchplace.style.height ="0";
searchplace.style.display="none"
closesearchicon.style.display="none"
searchplace.style.transition = "all 0.2s ease-in-out"}
searchblock.addEventListener("click",opensearchplace);
closesearchicon.addEventListener("click",closesearchplace)
