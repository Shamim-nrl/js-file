const person ={
    name: "abbul",
    age:23,
    contact:{
        phone:'012566154',
        email:'xyz@gmail.com',
    },
    education:{
        schoolName:'shahabad madrasha',
        subject:[
            {name:'bangla', mark:45},
            {name:'english', mark:55},
            {name:'math', mark:40}

        ]
    }
}


// line bai line aste hobe 

console.log(person.contact.email)
console.log(person.education.subject[1])
console.log(person.education.subject[1].name)