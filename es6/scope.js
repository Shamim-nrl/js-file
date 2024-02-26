

// global scope
const y = 5;
if (True) {
    console.log(y);
}
console.log(y);



// block scope (let , const) block ar modde ar semana ar baire access kora jabe na
{
    let y = 10;
}

function hello() {
    const y = 20;
}
hello()
console.log(y) // ata error dekabe


// ata kora jabe

const y = 30;
{
    const y = 40;
    console.log(y);
}