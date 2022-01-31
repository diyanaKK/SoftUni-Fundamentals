function solve(arr){
    let sortedNum = arr.sort((a,b)=>{
        return a-b
    });
    let resultArr =[];
while(sortedNum.length!==0){
    let minNum = sortedNum.shift();
let bigNum = sortedNum.pop();
        resultArr.push(bigNum)
    resultArr.push(minNum)
}

console.log(resultArr.join(' '));




}