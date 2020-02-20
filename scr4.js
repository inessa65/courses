let a = 0;
let b = 1;

for(let i = 0; i <= 10; i++){
    let sum = a + b;
    a = b;
    b = sum;
    console.log(sum);
}
