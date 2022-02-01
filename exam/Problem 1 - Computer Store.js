function solve(input){
    let customer=input[input.length-1]
let numbers = []
input.forEach(x=>{
     numbers.push( Number(x))});
let priceWithoutTaxes = 0;
let totalPrice =0


for(let i =0;i<numbers.length-1;i++){

    if(numbers[i]<= 0){
        console.log(`Invalid price!`);
    }else{
        priceWithoutTaxes+=Number(numbers[i]);
    }
}
let taxes =priceWithoutTaxes * 0.20;
totalPrice= priceWithoutTaxes+taxes;

if(customer==='special'){
    totalPrice= totalPrice-(totalPrice*(10/100));
    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${priceWithoutTaxes.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${totalPrice.toFixed(2)}$`);

}else if(totalPrice> 0){
console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${priceWithoutTaxes.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${totalPrice.toFixed(2)}$`);
} else if(totalPrice === 0){
    console.log(`Invalid order!`);
    
}
}
solve([
    '-1',
    
    ])
    