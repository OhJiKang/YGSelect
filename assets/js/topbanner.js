//Gọi biến chuẩn bị
var topbanner=document.querySelector(".top-banner")
var topbanneropencontent=document.querySelector("#jstopbanneropencontent")
var iconclosetb=document.querySelector(".jstopbannerclose")
var topbannerclosecontent=document.querySelector("#jstopbannerclosecontent")
var iconopentb=document.querySelector(".jstopbanneropen")
var iconclosebannerblock=document.querySelector(".icon-close-banner")
var bannercloseblock=document.querySelector(".banner-close")
// Hàm dùng để close banner
function closebanner(){
// Dùng cho việc thay đổi các thuộc tính
function readyclose(){
topbanner.style.height="80px"
topbanneropencontent.style.display ="none";
topbannerclosecontent.style.display ="block";
iconopentb.style.display="block"
iconclosetb.style.display="none"
iconclosebannerblock.style.display="none"
bannercloseblock.style.display="flex"}
//Cho hàm này chạy trễ một xíu
setTimeout(readyclose,50)
// Hàm dùng để cho animation chạy slide up
topbanner.style.transition = "all 0.3s ease-in-out";
topbanner.style.height = "80px";
}
// Hàm dùng để open banner
function openbanner(){
// Hàm dùng để chuẩn bị các thuộc tính cho open banner
    function readyopen(){
    topbanner.style.height="550px"
    topbannerclosecontent.style.display ="none";
    topbanneropencontent.style.display ="flex";
    iconclosetb.style.display="block"
    iconopentb.style.display="none"
    iconclosebannerblock.style.display="flex"
    bannercloseblock.style.display="none"}
    // Hàm dùng để cho phần thay đổi delay 1 xíu
    setTimeout(readyopen,150)
// Hàm dùng để cho animation chạy slide down
    topbanner.style.transition = "all 0.3s ease-in-out";
topbanner.style.height = "550px";
    }
    // Hàm dùng để lắng nghe ng dùng chạy
iconclosetb.addEventListener("click",closebanner)
iconopentb.addEventListener("click",openbanner)