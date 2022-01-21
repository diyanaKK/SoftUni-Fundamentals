function solve(arr){
let newArr = arr.sort((a,b)=>{
    return a.localeCompare(b)
})
for(let i = 0;i<newArr.length;i++){
    console.log(`${i+1}.${newArr[i]}`);
}
}
solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])