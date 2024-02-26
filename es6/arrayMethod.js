
// forEach,map,find,filter,reduce 


// forEach return kore na 
const number = [10, 20, 30, 40, 50]

number.forEach(item => console.log(item))






// Map return kore
const number = [10, 20, 30, 40, 50]

number.map(item => console.log(item))




const number = [10, 20, 30, 40, 50]

const b = number.map(item => item + 1)
console.log(number);
console.log(b)


// find sorto sapekke kono kesu khja se dudu protom ta return korbe

const number = [10, 20, 30, 40, 50]

const x = number.find(item => item === 30)
console.log(x);

// filter 
const number = [10, 21, 30, 41, 50]

const x = number.filter(item => item > 100)
const x = number.filter(item => item % 2 === 0)
const x = number.filter(item => item % 2 === 1)
console.log(x);


// reduce jog korar jonno

const nums [1, 2, 3, 4, 5, 6, 7]
const sum = nums.reduce((preValue, currentValue) => preValue + currentValue, 0);
console.log(sum);