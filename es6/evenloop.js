
console.log(1);
console.log(2);
// setTimeout(()=>{
//     console.log(3);
// }, 4000)
// setTimeout(()=>{
//     console.log(3);
// }, 3000)
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
let sum = 0;
const clockId = setInterval(() => {
    sum++
    

    if (sum > 2) {
        clearInterval(clockId)
    }
    console.log( clockId)
}, 2000)