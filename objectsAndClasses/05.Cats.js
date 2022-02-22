function catsCreator(array){
    let cats = [];

class Cat{
    constructor(name,age){
        this.name = name,
        this.age= age,
        this.meow = () => console.log(`${this.name}, age ${this.age} says Meow`);
    }
}


for(let currentString of array){
    let currentData = currentString.split(' ')
    let currentCat= new Cat(currentData[0],currentData[1])
    cats.push(currentCat)
}
cats.forEach(c => c.meow())
}
catsCreator(['Mellow 2','Tom 5'])