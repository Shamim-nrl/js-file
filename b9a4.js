
// ------------
function calculateMoney(ticketSale) {
    if (ticketSale <= 0) {
        return "Invalid Number"
    }
    const ticketPrice = 120;
    const getMan = 500;
    const lunchExpense = 50;
    const totalExpense = lunchExpense * 8 + getMan;
    const totalTicketSale = ticketSale * ticketPrice;
    const balance = totalTicketSale - totalExpense
    return balance
}
console.log(calculateMoney(10)) 

function checkName(name) {
    if(typeof name !== "string"){
       return 'invalid'
    }    
    const latter = ['a', 'y', 'i', 'e', 'o', 'u', 'w']; 
    if (latter.includes(name.slice(-1).toLocaleLowerCase())) {
        return 'Good Name'
    } return 'Bad Name'
}
console.log(checkName(['Rashed'] ))

function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array'
    }
    let arr = array.filter(name => typeof name === 'number' && !isNaN(name) )
    return arr
}
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]} ))

function password(obj) {
    if ((obj.birthYear.toString().length !== 4) || (Object.keys(obj).length!==3)) {
        return "invalid"
    }
    const name = obj.name
    const birthYear = obj.birthYear
    const siteName = obj.siteName
    siteNameUppercase = siteName.charAt(0).toUpperCase() + siteName.slice(1);
    const result = siteNameUppercase + '#' + name + '@' + birthYear
    return result
}
console.log(password({ name: '“toky”' , birthYear: 200, siteName: '“Facebook”' } ))

function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr)) {
        return 'invalid input'
    }
    let tax = 0;
    for (let i of arr) {
        if (i >= 3000) {
            tax = i * 20 / 100 - tax
        }
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    const savings = sum - livingCost - tax;
    if (savings < 0) {
        return 'earn more'
    }return savings
}
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000  ))

// -------






