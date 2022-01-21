function solve(arr) {
    let newArr = [];
    // let newArr = arr.filter((el)=>{
    //     if(el % 2 !== 0){
    //         return el
    //     }
    // })
    // newArr = newArr.map((el)=>{
    //     return el * 2
    // })
for(let i = 0;i<arr.length;i++){
    if(i%2!==0){
        arr[i]*=2
newArr.push(arr[i])
    }
}
  console.log(newArr.reverse().join(' '));
}
solve([10, 15, 20, 25])