function solve(arr){
let newArr =[];
for(let i =0;i<arr.length;i++){
    if(arr[i]<0){
        newArr.unshift(arr[i]);
    }else{
        newArr.push(arr[i]);
    }
    
}

for(let i = 0;i<newArr.length;i++)
console.log(newArr[i]);


}
solve(['7', '-2', '8', '9'])