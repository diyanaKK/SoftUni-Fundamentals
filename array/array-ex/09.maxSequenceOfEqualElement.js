function solve(arr){
let newArr = [];
let currentNum = 0;
let nextNum =0;

for(let i = 0;i<arr.length;i++){
    currentNum=arr[i];
    for(let j = i+1;j<arr.length;j++){
        nextNum=arr[j];
        if(currentNum===nextNum){
           newArr.push(nextNum)
        }else{
            break;
        }
    }
    console.log(newArr);
}



}
solve([2,1,1,2,3,3,2,2,2])