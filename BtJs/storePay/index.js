let qrt = prompt("input order");
let sum = 0;
for(var i =1; i<=qrt;i++){
    let item = prompt("ราคาสินค้า"+i);
    sum = sum +parseInt(item);
    document.getElementById("price-list").innerHTML+="รายการสินค้าชิ้นที่"+i+":"+item+" บาท"+"<br>";
}
document.getElementById("result").innerHTML = "Total Price : "+sum+" bath";