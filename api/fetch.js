// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



// function loadData() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(data => displayload(data))

// }


// function displayload(data) {
//     console.log(data)
// }

// function loadUser (){
//     fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res =>res.json())
//     .then(data =>display(data))
// }
// function display (data){

// const users = document.getElementById('users-list')


//     for (const user of data){
//         console.log(user);

//         const li =document.createElement("li")
//         li.innerText=user.email

//         users.appendChild(li)
//     }


// }


function dataLoad() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayData(data))
}


function displayData(data) {
    const loadPost = document.getElementById("load-post")
    for (const post of data) {
        console.log(post);
        const div =document.createElement("div")
        div.classList.add("post")

        div.innerHTML=`
        <h4>user-${post.id}</h4>
        <h5>post:-${post.username}</h5>
        <p>post description-${post.address.city}</p>
        `
        loadPost.appendChild(div);
    }
}



dataLoad()