const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let arr = [];
let n = 0;
r1.question('Max element in array: ', (max) => {
    r1.question('Step of array: ', (step) => {
        while (n < Number(max)) {
            arr.push(n)
            n += Number(step);
            console.log(n);
        }
        console.log(arr);
        let arr1 = arr.map((el) => {
            return el ** 2;
        });
        console.log(arr1);
        let sum = arr1.reduce((a, b) => {
            return a + b;
        });
        console.log(sum);
        r1.close();

    });
});

