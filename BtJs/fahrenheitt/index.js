function toCels(){
    let fahrenheit = prompt("Input fahrenheit : ");
    let value =(fahrenheit-32)*5/9;
    document.getElementById("Ans").innerHTML = value.toFixed(2) +" Cel";
}
toCels();