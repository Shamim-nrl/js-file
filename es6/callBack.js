

function show(name, age) {
    console.log("my name is: ", name "age is: ", age);
}


function fun1(name, age, callback) {
    console.log("hello from first function");
    callback(name, age)
}
fun1("mahedy",26, show)