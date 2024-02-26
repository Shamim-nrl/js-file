
// primitive datatype (diract value dai)

const x = 5;
const a = "hello";

let z = x;
z = 10;

console.log("x = ", x);
console.log("z = ", z);

// non primitive (value je address ase sei address dai)
const b = { nums: "mahedy" };
const nums = [1, 2, 3]

let num1 =nums;
num1.push(4)
console.log(("num1", num1));