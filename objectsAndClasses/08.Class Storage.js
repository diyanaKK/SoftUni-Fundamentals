
class Storage {
    constructor(capacity) {
        this.capacity = +capacity;
            this.storage = [];
            this.totalCost = 0;
    }
    addProduct(product) {
        this.storage.push(product)
        this.totalCost +=Number(product.price)*Number(product.quantity)
       this.capacity-=Number(product.quantity)
    }
    getProducts() {
        let arrPrint = []
        this.storage.forEach((product) => {

            arrPrint.push(JSON.stringify(product))
        })
        return arrPrint.join('\n')

    }
}
let productOne = {name: 'Tomato', price: 0.90, quantity: 19};
let productTwo = {name: 'Potato', price: 1.10, quantity: 10};
let storage = new Storage(30);
storage.addProduct(productOne);
storage.addProduct(productTwo);
console.log(storage.totalCost);


