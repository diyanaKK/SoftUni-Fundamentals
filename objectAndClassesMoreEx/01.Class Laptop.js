class Laptop{
    constructor(quality){
        this.info ={
            producer,
            age,
            brand
        } 
        ,
        this.quality = quality,
        this.isOn = false,
        this['getter price'] = (800-({age}*2) + (quality * 0.5))
    }
turnOn(){
    this.isOn= true
    this.quality--
}
turnOff(){
    this.isOn=false
    this.quality--
}

showInfo(data){
    this.info.forEach(data => {
        console.log(JSON.stringify(data));
    });
}
}
let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
