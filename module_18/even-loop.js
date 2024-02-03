
let i = 0;
while (i < 15) {
    console.log(i)
    if (i % 2 === 0) {
        console.log('event number', i)
    }
    i++
}

let num = 1;
let sum = 0;
while (num < 10) {
    console.log(num);
    if (num % 2 === 0) {
        console.log('even number', num)
    }
    sum = sum + num
    console.log('sum', sum)
    num++
}