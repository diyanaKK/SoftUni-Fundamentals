function catsCreator(array){
    let cats = [];

class Cat{
    constructor(name,age){
        this.name = name,
        this.age= age,
        this.meow = () => console.log(`${this.name} , age ${this.age} says Meow`);
    }
}


for(let i =0;i<array.length;i++){
    let catData = array[i].split(' ');
    let name,age;
    let currentCat = new Cat(currentCat[0],currentCat[1])
    currentCat.meow
    cats.push(new Cat(name,age));
}

}
catsCreator(['Mellow 2','Tom 5'])