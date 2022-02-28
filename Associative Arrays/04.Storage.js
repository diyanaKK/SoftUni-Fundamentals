function solve(input){
let map = new Map
for(let line of input){
    let products = line.split(' ')
    let product = products[0]
    let quantity = Number(products[1])
    if(!map.has(product)){
        map.set(product,+quantity)
    }else{
        let currentQuantity = map.get(product)
        let newQuantity =currentQuantity+=quantity
        map.set(product,+newQuantity)
    }
}
for(let kvp of map){
    console.log(`${kvp[0]} -> ${kvp[1]}`);
}
}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)



