var number = prompt("กรอกเลขที่ต้องซื้อ");
document.getElementById("buynumber").innerHTML=number;
var random = Math.floor(Math.random()*100);
document.getElementById("Shownumber").innerHTML=random;
if(number == random){
    document.getElementById("final").innerHTML="คุณถูกรางวัล";
}else{
    document.getElementById("final").innerHTML="คุณไม่ถูกรางวัล";
}