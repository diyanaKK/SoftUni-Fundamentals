function solve(arr){
    let sumForOdd = 0;
    let sumForEven =0;
    let diff =0;
    
    for (let num of arr) {
        num=Number(num)
        if(num%2=== 0){
            sumForEven+=num;
        }else{
            sumForOdd+=num;
        }
    }
    diff=sumForEven - sumForOdd;
    console.log(diff)


}
solve(['1','2','3','4','5','6'])
solve(['3','5','7','9'])