function solve(currentStock,deliveryStock){
let storeProducts = {};

for(let i = 0;i<currentStock.length;i+=2){
let product = currentStock[i]
storeProducts[product]= Number(currentStock[i+1])

}
for(let i = 0;i<deliveryStock.length;i+=2){
    let product = deliveryStock[i]
   if(!storeProducts.hasOwnProperty(product)){
    storeProducts[product]= 0
   }
storeProducts[product]+=Number(deliveryStock[i+1])
}

for( let product in storeProducts){
    console.log(`${product} -> ${storeProducts[product]}`);
}



}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
      ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])