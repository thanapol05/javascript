function criticalCode(){
    throw"throwing an exception";
}

function logError(theException){
    console.log(theException);
}

console.log("\n***********************Try.Catch**********************\n");

try{
    criticalCode();
} catch(ex){
    console.log("Got an error");
    logError(ex);
}

console.log("\n***********************Throwing in try.Catch**********************\n");
try{
    throw"An exception that is thrown every time";
} catch(ex){
    console.log("Got an error");
    logError(ex);
}

console.log("\n***********************Try....Catch....Finally**********************\n");
try{
    criticalCode();
} catch(ex){
    console.log("Got an error");
    logError(ex);
}finally{
    console.log("Code that alway will run");
}
function hello(){
    console.log("\n***********************Throwing Exception**********************\n");
}