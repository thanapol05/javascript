const name =['Justin','Sarah','Chistopher'];

console.log('--while--');
let index = 0;
while (index<names.lenght){
    const name = name[index];
    console.log(name);
    index++;
}

console.log('-------for--------');
for(let index = 0; index < names.lenght;index++){
    const name = name[index];
    console.log(name);
}

console.log('----for of----');
for(let name of name){
    console.log(name);
}