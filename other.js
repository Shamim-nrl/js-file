// let student = {
//     book: ['bangla', 'english', 'math'],
//     age: 20,
//     roll: 12,
//     teacher: {
//         etihash: 'jobbar',
//         gonit: 'asad',
//     }
// }
// let i = `my bool is ${student.book}+my teacher is ${student.teacher}`
// console.log(i);

// let n = 'i am a larning web dev';

// console.log(n.)

// function getMenu() {
//  console.log("Burger, Pizza, Pasta");
// }

// getMenu()

// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//      console.log(i);
//   }, 100);
// }   

// console.log(Math.pow(2, 3))

// 1 to 100 ar modda bejor sonkha jog fol koto
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 1) {

//     }
//     sum = i + sum
// }
// console.log(sum)

// const jim = 10;
// const kim = 150;
// const tim = 15;

// function bigNumber(numbers){
//    if(jim>kim&&jim>tim){
//     console.log('this is a big number', jim)
//    }
//  else  if(kim>jim&&kim>tim){
//     console.log('this is a big number', kim)
//    }
//    if(tim>jim&&tim>kim){
//     console.log('this is a big number', tim)
//    }
// }
// const num= bigNumber()
// console.log(num)
// ----------------------------------------------------



// function canpay(arr, totalDue) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     console.log(sum)
//     if (sum >= totalDue) {
//         return "true"
//     }
//     else {
//         return "false"
//     }
// }

// console.log(canpay([1, 5, 5], 10))


// function canpay(arra, num) {
// if(arra == 0){
//     return "input a correct number"
// }

//     let sum = 0;
//     for (let i = 0; i < arra.length; i++) {
//         sum += arra[i]

//     }
//     console.log(sum)
//     if (sum >= num) {
//         return 'true'
//     }
//     return 'false'
// }
// let pay = canpay([0], 10)
// console.log(pay)

// function height(inch) {
//     const feet = inch / 12;
//     const feetIn = parseInt(feet)
//     const vagshas = inch % 12;
//     const netHeight = feetIn + 'fit' + '. ' + vagshas + '. ' + 'inch';
//     return netHeight

// }

// const result = height(75)
// console.log(result)

// function feet (inch2){
//     const result = inch2*1.60934;
//     return result
// }
// console.log(feet(24))

function canPay(arr, totalDue) {
    if (arr == 0) {
        return 'please input valid number '
    }

    let sum = 0;
    for (let i of arr) {
        sum = sum + i
        console.log('first', sum)
    }
    if (sum >= totalDue) {
        return "true"
    } return 'false'
}
console.log(canPay([0], 10))

