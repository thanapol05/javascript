var round = prompt("You wana play any round?");
for(var i =0; i< round;i++){
    var answer =prompt("h or t");
    var round_ans = "";
     round_ans = round_ans + answer;
    var random_answer="";
    var Check_answ=0;
    var Check="";
    if(Math.floor(Math.random()*10) <=4){
        random_answer = "h";
    }else{
        random_answer ="t";
    }
    if(answer == random_answer){
        alert("You win");
        Check = Check+1;
       console.log(Check);
         
    }
    else{
        alert("You lose");
    }
        Check += Check;
        //console.log(Check_answ); 
     document.getElementById("randomht").innerHTML += "You Answer" +" Round "+(i+1)+": " +round_ans +"<br>";
     document.getElementById("Show_ans").innerHTML += "correct Answer" +" Round "+(i+1)+": " +random_answer +"<br>";
     
}
document.getElementById("Check_ans").innerHTML += "correct Answer" +" Round "+": " +Check +"<br>";