function oddAndEvenSum(input){

let numToString = input.toString()
let inputL = input.length;
let sumEven=0;
let sumOdd=0;

for(let i = 0;i<inputL;i++){
    let currentNum = Number(numToString[i]);
    if(currentNum %2===0){
sumEven+=currentNum
    }else [
        sumOdd+=currentNum
    ]
}
console.log(`Odd sum =${sumOdd}, Even sum = ${sumEven}`);



console.log(numToString);
}
oddAndEvenSum(1000435)