function solve( arr , num){
let arrOfNum = arr;
for(let k = 0; k<num;k++){
      
    let numToMove=arrOfNum.shift();
    arrOfNum.push(numToMove)
    }
console.log(arrOfNum.join(' '));
}
solve([51, 47, 32, 61, 21], 2)