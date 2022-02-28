const people = ["Aaron","Mel","John"];
const one =1;
const str = "Hello World";
const b =true;
const employee ={
    fristName:"Thanapol",
    lastName: "Seekhot",
};

function sayHello(person){
    console.log("Hello"+person.fristName);
}

console.log(typeof people);
console.log(typeof sayHello);
console.log(employee instanceof Array);
sayHello(employee);