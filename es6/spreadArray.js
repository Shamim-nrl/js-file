

const number = [1, 2, 3,];
// const number1= number;

const number1 = [...number]






// const number1 =[]
// for(let num of number){
//     number1.push(num)
// }


number.push(10)
number1.push(30)

console.log("number", number);
console.log("number1", number1);





// -----------------------------------------------------------

// distructaring

const nums = [1, 2, 3, 4, 5, 6,];

const [e, f, g, h] = nums

console.log(e, f, g, h);


// rest oparator
const nums2 = [1, 2, 3, 4, 5, 6,]


const x =nums2[0]

const [a, b, c,...d] = nums2

console.log(a, b, c, d);
