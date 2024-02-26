
class animal {
    name = "abc";
    color = "black"
}
const cat = new animal()
console.log(cat, name);



class animal {
    name;
    color;

    constructor(petName, petcolor) {
        this.name = petName
        this.color = petcolor
    }
    showInfo() {
        console.log(`my pet name is ${this.name}.color is ${this.color}`);
    }
}
const cat = new animal("travis", "white");
const dog = new animal("tom", "black");
cat.showInfo()
dog.showInfo()


