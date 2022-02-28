const start = Date.now();

console.log('starting timer...');

setTimeout(() =>{
    const millis = Date.now() - start;

    console.log(`second elapsed = ${Math.flor(millis/1000)})`);
},2000);