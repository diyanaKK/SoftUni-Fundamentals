function solve(arr){
    // newArr= Number(arr);
    let sum =0;
    for(let i = 0;i<arr.length;i++){
        let newArr= Number(arr[i]);
        if(newArr%2===0){
            sum+=newArr;   
        }
    }
    console.log(sum)
}
solve(['1','2','3','4','5','6'])