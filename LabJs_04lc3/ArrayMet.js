const arrayOfNumbers = [1,2,3,4];

const sum = arrayOfNumbers.reduce((accumulator,currenValue) =>{
    return accumulator+currenValue;
});

console.log(sum);