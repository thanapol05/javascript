function promiseTimeout(ms){
    return new Promise((resolve,reject)=> {
        setTimeout(resolve,ms);
    });
}

async function logRunnungOperation(){
    //logic
    return 42;
}

async function run(){
    //logic
    console.log('start');
    await promiseTimeout(2000);
    //try take await out and see
    const response = await logRunnungOperation();
    console.log(response);

    console.log("Stop!!")
}