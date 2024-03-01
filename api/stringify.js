const shop ={
    owner : "alia",
    address:{
        start: 'bobani',
        city: 'dhaka',
        country:'bangladesh'
    },
    products: ['laptop', 'talivition','mobile', 'watch'],
    revenue: 45000,
    isOpen: true,
    isNew: false

}
console.log(shop);

const shopJson= JSON.stringify(shop)
console.log(shopJson);