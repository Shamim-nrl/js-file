
// function outerFunction(){
//     let a=1;
//     return function innerFunction (){
//         a++
//         console.log(("value in inner: ", a));
//     }
// }



// ------------------------------

const outerFunction = () => {
    let count = 0;

    const inner = () => {
        count++;
        console.log("count:", count);
    }
    return inner;
}



const x1 = outerFunction()
const x2 = outerFunction()
x1()
x1()
x1()
x2()
