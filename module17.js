if (3 < 5) {
    //  console.log("shonka tik ase")
}
else {
    // console.log("shonka vul")
}

let ruti = 19;
if (ruti >= 20) {
    // console.log("kenbo")
}

// BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.

// */


// // let weight = 18;
// //  weight = 24;
//  weight = 25;


// if (weight<18.5){
//     console.log("you are underweight")
// }

// else if (weight>=18.5 && weight<=24.9){
//     console.log("you are normal")
// }
// else if (weight>=25){
//     console.log("you are overweight")
// }


// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59


// let number = 95;


// if (number>=90){
//     console.log("a grade");
// }
// else if (number>=80 && number <=89){
//     console.log("b grade");
// }
// else if (number>=70 && number <=79){
//     console.log("c grade");
// }
// else if (number>=60 && number <=69){
//     console.log("d grade");
// }

// if you get more then 80 then inside your friend score. 
//     If your friend get more than 80. then go for a lunch. 
//     if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
//     if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
//     if your friend get less than 40, block your friend
// if you get less than 80 go to home and sleep and act sad

// Note: 
// use nested if-else-if-else
// */



// let score = 59;
// if (score > 80){
//     console.log("go for a lunch")
// }
// if (score > 80 || score <60){
//     console.log("good luck bolbe")
// }

// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk
// */

var age = 60;
if (age < 10) {
    console.log("free")
}
if (age >= 10 && age <= 59) {
    console.log("50%discount")
}
if (age >= 60) {
    console.log("15%discount")
}


