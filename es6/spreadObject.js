
// Object Spreading

const person = {
    name: "hero allom",
    age: 34,
    Phone: "0182563648",
    address: "banani",
    P: [1, 2, 3, 4],

}
const person1 = { ...person }
person1.email = "hello@gmail.com"

console.log(person1);



// Object distructuratiog

const person = {
    name: "hero allom",
    age: 34,
    Phone: "0182563648",
    address: "banani",
    P: [1, 2, 3, 4],

    address: {
        zilla: "rajshahi",
        village: charbila
    }

}



const { phone, address, name } = person

console.log(phone)


const { zilla } = address
console.log(zilla)

// -------------------------------------------------

const person = {
    name: "hero allom",
    age: 34,
    Phone: "0182563648",
    address: "banani",
    P: [1, 2, 3, 4],

}
// name,  bade baki sob chaile 

const {name,...rest}=[parson]
console.log(rest);





// ak line distructureing

const person = {
    name: "hero allom",
    age: 34,
    Phone: "0182563648",
    address: "banani",
    P: [1, 2, 3, 4],

    address: {
        zilla: "rajshahi",
        village: charbila
    }

}

const {address:{zilla}}=person
console.log(address);
