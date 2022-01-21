function solve(arr){
let num = arr.shift();
let arr2 = arr.slice(0,num);
let arr3 = arr.slice(arr.length-num -arr.length)
console.log(arr2.join(' '))
console.log(arr3.join(' '));
}
solve([2,  7, 8, 9]);
solve([3,6, 7, 8, 9])