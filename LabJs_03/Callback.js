function creatQuote(quote,callback) {
    let myQoute = "Like i always say," + quote;
    callback(myQoute);
}

function logQuote(quote){
    console.log(quote+'Yes..');
}

creatQuote(" you will getting better!",logQuote);