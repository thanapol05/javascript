/*let furniture =['Table','Chair','Couch'];

let iterator = furniture[Symbol.iterator]();

while(true){
    let result = iterator.next();
    if(result.done)break;
    console.log(result.value); 
}*/
for(let furniture of ['Table','Chair','Couch']) {
    console.log(furniture.length);
}