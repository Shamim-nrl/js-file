// module_22 reword video


function quibe(number) {
    if (typeof number !== 'number') {
        return "enter provide righr number "
    }
    const result = Math.pow(number, 3)
    return result
}
console.log(quibe(4))

// /-----------------------------
function ecual(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== 'string') {
        return " please provide string parameter "
    }
    const result = string1.includes(string2)
    return result
}
console.log(ecual('john doc', 'ohn'))

// --------------------------------------------

function sortMeker(arr) {
    const [a, b] = arr;
    if (b < 0 || b < 0) {
        return 'invalid Input';
    }
    if (a === b) {
        return 'equal';
    }

    if (a > b) {
        return [a, b]
    }
    else {
        return [b, a]
    }
}
console.log(sortMeker([2, 2]))

// -------------------------------------

function fiendAddress(obj) {
    const street = obj.street || "_"
    const house = obj.house || "_"
    const socity = obj.socity || "_"

    const str = street + ',' + house + "," + socity;
    return str
}
console.log(fiendAddress({ street: 10, socity: 'Erth Perfect' }))
// --------------------------------------------------------------------

function canPay(changeArray, totalDue) {
    if (changeArray == 0) {
        return "please input carrect array "
    }
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum = sum + changeArray[i];

    }
    console.log(sum)

    if (sum >= totalDue) {
        return 'true'
    }
    else {
        return "false"
    }
}
console.log(canPay([1, 3, 5], 10))


