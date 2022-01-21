function solve(arr){
let sortedNums = arr.sort((a,b)=>{
    return a - b
});
sortedNums=sortedNums.slice(0,2)

console.log(sortedNums.join(' '));
}
solve([30, 15, 50, 5])