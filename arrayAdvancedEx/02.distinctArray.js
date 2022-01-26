function solve(arr){
    let newArr=[];
arr.forEach((el,index) => {
    if(!newArr.includes(el)){
        newArr.push(el)
    }
});
console.log(newArr.join(' '));
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
