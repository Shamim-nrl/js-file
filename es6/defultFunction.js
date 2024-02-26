
// defult function value jog korle =0, gun korle =1

const add = (x = 0, y = 0) => {
    console.log(x + y);
}
add(2, 3)



const parson = {
    name: "mehedy"
    age: 26
}
// const showInfo = (props) => {
//     const { name,age = props;
//     console.log(name, age)
//     }
// }
const showInfo = ({ name, age }) => console.log(name, age)

showInfo(parson)