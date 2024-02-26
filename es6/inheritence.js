
class owner{
    ownerName="mehedy";
    ownerAge=26;

    ownerInfo(){
        console.log((`ownerName: ${this.ownerName}.ownerAge: ${this.ownerAge}`));
    }
}
class animal extends owner {
    name;
    color;

    constructor(petName, petcolor) {
        super()
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